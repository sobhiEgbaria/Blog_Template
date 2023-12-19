import { NavBar } from "../components/navbar/NavBar";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { BlogContext } from "../providers/blog-providers";
import { HeaderContent } from "../components/HeaderContent/HeaderContent";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const SingleArticle = () => {
  const { data } = useContext(BlogContext);
  const params = useParams();
  const id = parseInt(params.id);

  const blog = data.find((item) => {
    return item.id === id;
  });

  return (
    <>
      <NavBar />
      <img src={blog.img} alt="" style={{ width: "300px", height: "300px" }} />
      <Contacts />
      <CopyRight />
    </>
  );
};
