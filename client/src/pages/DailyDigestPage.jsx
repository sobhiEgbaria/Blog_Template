import { NavBar } from "../components/navbar/NavBar";
import { HeaderContent } from "../components/HeaderContent/HeaderContent";
import { MoreArticleButton } from "../components/buttons/Buttons";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { ListOfBlogs } from "../components/listOfBlogs/ListOfBlogs";
import { BlogContext } from "../providers/blog-providers";
import { useContext } from "react";

export const DailyDigestPage = () => {
  const { data } = useContext(BlogContext);

  return (
    <>
      <NavBar />
      <HeaderContent
        title="Programming"
        description="Learning about programming languages is a continuous journey, and staying updated"
      />
      <ListOfBlogs data={data} />
      <MoreArticleButton />
      <Contacts />
      <CopyRight />
    </>
  );
};
