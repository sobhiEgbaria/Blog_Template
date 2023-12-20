import { createContext, useEffect, useState } from "react";
import { Data } from "../data/data";

export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [data, setData] = useState(Data);
  const [fullData, setFullData] = useState(Data);

  const addBlog = (post) => {
    setData([post, ...data]);
    fullData.unshift(post);
    // localStorage.setItem("fullData", JSON.stringify(fullData));
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

      setData([...filteredData]);
    }

    if (term === "") {
      setData([...fullData]);
    }
  };

  // useEffect(() => {
  //   const stringData = JSON.parse(localStorage.getItem("fullData"));
  //   setData(stringData);
  //   setFullData(stringData);
  // }, []);

  return (
    <BlogContext.Provider
      value={{ data, addBlog, searchBlog, deleteBlogById, editBlogById }}
    >
      {children}
    </BlogContext.Provider>
  );
};
