import { NavBar } from "../components/navbar/NavBar";
import { HomePageHeaderContent } from "../components/homePage_header_content/HomePageHeaderContent";
import { ListOfBlogs } from "../components/listOfBlogs/ListOfBlogs";
import { ViewAllButton } from "../components/buttons/Buttons";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { BlogContext } from "../providers/blog-providers";
import { useContext, useEffect } from "react";

export const HomePage = () => {
  const { data } = useContext(BlogContext);

  return (
    <div id="HomePage">
      <NavBar />
      <HomePageHeaderContent
        title="Dive into the ever-evolving world of tech"
        description="Join our community of tech now BLOGTEC "
      />
      <ViewAllButton title="programming" />
      <ListOfBlogs data={data.slice(0, 3)} />

      <ViewAllButton title="CS" />
      <ListOfBlogs data={data.slice(3, 6)} />

      <ViewAllButton title="Tools" />
      <ListOfBlogs data={data.slice(6, 9)} />
      <Contacts />
      <CopyRight />
    </div>
  );
};
