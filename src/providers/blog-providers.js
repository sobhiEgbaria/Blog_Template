import { createContext, useEffect, useState } from "react";
import { Data } from "../data/data";

export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [data, setData] = useState(Data);
  const [fullData, setFullData] = useState(Data);

  useEffect(() => {
    const stringData = JSON.parse(localStorage.getItem("fullData"));
    setData(stringData);
    setFullData(stringData);
  }, []);

  const addBlog = (post) => {
    setData([post, ...data]);
    fullData.unshift(post);
    localStorage.setItem("fullData", JSON.stringify(fullData));
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

  return (
    <BlogContext.Provider value={{ data, addBlog, searchBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
