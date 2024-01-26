import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthProviders";

export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [postNumber, setPostNumber] = useState(15);
  const { user } = useContext(AuthContext);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/posts?limit=${postNumber}`
      );
      setData(await response.json());
    } catch (error) {
      console.log(`${error.message}`);
    }
  };

  const addBlog = (post) => {
    const newPost = {
      title: post.title,
      description: post.description,
      body: post.body,
      img: post.img,
      category: post.category,
      postedBy: "sobhi",
    };

    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchPosts();
    });
  };

  const editBlogById = (post) => {
    const updates = {
      title: post.title,
      description: post.description,
      body: post.body,
      img: post.img,
      category: post.category,
    };

    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchPosts();
    });
  };

  const deleteBlogById = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchPosts();
    });
  };

  const searchBlog = async (term) => {
    if (term !== "") {
      try {
        const response = await fetch(
          `http://localhost:3000/posts?title=${term}`
        );
        setData(await response.json());
      } catch (error) {
        console.log(`${error.message}`);
      }
    }

    if (term === "") {
      fetchPosts();
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users`);
      setUsers(await response.json());
    } catch (error) {
      console.log(`${error.message}`);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [postNumber]);

  return (
    <BlogContext.Provider
      value={{
        data,
        users,
        addBlog,
        searchBlog,
        deleteBlogById,
        editBlogById,
        postNumber,
        setPostNumber,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

//==================================================================================
//==================================================================================

// const deleteBlogById = (id) => {
//   const updatedData = fullData.filter((blog) => {
//     return blog.id !== id;
//   });
//   setData([...updatedData]);
//   setFullData([...updatedData]);
// };

// const editBlogById = (id, title, description) => {
//   const updatedData = fullData.map((blog) => {
//     if (blog.id === id) {
//       return {
//         ...blog,
//         title: title,
//         description: description,
//         id: id,
//       };
//     }

//     return blog;
//   });
//   setData([...updatedData]);
//   setFullData([...updatedData]);
// };

// const searchBlog = (term) => {
//   if (term !== "") {
//     const filteredData = fullData.filter((blog) => {
//       return blog.title.toLowerCase().includes(term.toLowerCase());
//     });

//     setData([...filteredData]);
//   }

//   if (term === "") {
//     setData([...fullData]);
//   }
// };
