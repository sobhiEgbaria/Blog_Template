import { NavBar } from "../components/navbar/NavBar";
import { HeaderContent } from "../components/HeaderContent/HeaderContent";
import { ListOfBlogs } from "../components/listOfBlogs/ListOfBlogs";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { MoreArticleButton } from "../components/buttons/Buttons";
import { BlogContext } from "../providers/blog-providers";
import { useContext } from "react";

export const TutorialsPage = () => {
  const { data } = useContext(BlogContext);

  return (
    <>
      <NavBar />
      <HeaderContent
        title="Tools"
        description="Software developers, aiding in the creation, testing, and debugging of applications"
      />
      <ListOfBlogs data={data} />
      <MoreArticleButton />

      <Contacts />
      <CopyRight />
    </>
  );
};
