import { createContext, useEffect, useState } from "react";
import { Data } from "../data/data";

export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  return <BlogContext.Provider value={data}>{children} </BlogContext.Provider>;
};
