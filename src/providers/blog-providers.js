import { createContext, useState } from "react";
import { Data } from "../data/data";

export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  // we use 2 state to keep the full data after filtering the blogs
  const [data, setData] = useState(Data); // storing the filtered data(blogs)
  const [fullData, setFullData] = useState(Data); // store always the full data (blogs)

  const addBlog = (post) => {
    setData([post, ...data]);
    setFullData([post, ...data]);
  };

  const deleteBlogById = (id) => {
    const updatedData = fullData.filter((blog) => {
      return blog.id !== id;
    });
    setData([...updatedData]);
    setFullData([...updatedData]);
  };

  const editBlogById = (id, title, description) => {
    const updatedData = fullData.map((blog) => {
      if (blog.id === id) {
        return {
          ...blog,
          title: title,
          description: description,
          id: id,
        };
      }

      return blog;
    });
    setData([...updatedData]);
    setFullData([...updatedData]);
  };

  const searchBlog = (term) => {
    if (term !== "") {
      const filteredData = fullData.filter((blog) => {
        return blog.title.toLowerCase().includes(term.toLowerCase());
      });
      //data = the filtered blogs
      setData([...filteredData]);
    }

    if (term === "") {
      // data =  all the blogs
      setData([...fullData]);
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
