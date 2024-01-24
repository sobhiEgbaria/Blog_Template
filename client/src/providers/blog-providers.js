import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthProviders";

export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  // we use 2 state to keep the full data after filtering the blogs
  const [data, setData] = useState([]); // storing the filtered
  const [fullData, setFullData] = useState(data);
  const { user } = useContext(AuthContext);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts`);
      setData(await response.json());
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [data]);

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
      alert("post created ");
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
      alert("post created ");
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
      alert("post created ");
      fetchPosts();
    });
  };

  const searchBlog = (term) => {
    if (term !== "") {
      const filteredData = data.filter((blog) => {
        return blog.title.toLowerCase().includes(term.toLowerCase());
      });

      setData([...filteredData]);
    }

    if (term === "") {
      setData([...data]);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        data,
        addBlog,
        searchBlog,
        deleteBlogById,
        editBlogById,
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
