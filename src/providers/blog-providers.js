import { createContext, useEffect, useState } from "react";
import { Data } from "../data/data";

export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  const addBlog = (post) => {
    setData([post, ...data]);
  };

  return (
    <BlogContext.Provider value={{ data, addBlog }}>
      {children}{" "}
    </BlogContext.Provider>
  );
};
