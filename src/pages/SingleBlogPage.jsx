import { NavBar } from "../components/navbar/NavBar";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { BlogContext } from "../providers/blog-providers";
import { ListOfCards } from "../components/listOfCards/List_of_cards";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SingleBlogPageHeader } from "../components/singleBlogPageHeader/singleBlogPageHeader";

export const SingleBlogPage = () => {
  const { data, deleteBlogById } = useContext(BlogContext);

  const params = useParams();
  const id = parseInt(params.id);

  const blog = data.find((item) => {
    return item.id === id;
  });

  return (
    <>
      <NavBar />
      <SingleBlogPageHeader
        id={blog.id}
        img={blog.img}
        description={blog.description}
        title={blog.title}
        deleteBlogById={deleteBlogById}
      />
      <ListOfCards data={data.slice(0, 3)} />
      <Contacts />
      <CopyRight />
    </>
  );
};
