import { NavBar } from "../components/navbar/NavBar";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { AddAndEditBlog } from "../components/addAndEditBlog/addAndEditBlog";
import { BlogContext } from "../providers/blog-providers";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const EditBlogPage = () => {
  const { data } = useContext(BlogContext);

  const params = useParams();
  const id = params.id;

  const blog = data.find((item) => {
    return item.id === id;
  });

  return (
    <>
      <NavBar />
      <AddAndEditBlog
        buttonText={"Edit"}
        id={id}
        title={blog.title}
        description={blog.description}
        body={blog.body}
        img={blog.img}
        category={blog.category}
        hederTitle={"Edit Your Blog"}
        EditedBlogId={blog.id}
      />
      <Contacts />
      <CopyRight />
    </>
  );
};
