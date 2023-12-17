import { NavBar } from "../components/navbar/NavBar";
import { HomePageHeaderContent } from "../components/homePage_header_content/HomePageHeaderContent";
import { ListOfCards } from "../components/listOfCards/List_of_cards";
import { HomePageButton } from "../components/buttons/Buttons";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { BlogContext } from "../providers/blog-providers";
import { useContext } from "react";

export const HomePage = () => {
  const data = useContext(BlogContext);

  return (
    <div id="HomePage">
      <NavBar />
      <HomePageHeaderContent
        title="Minimal blog template for creative expressions"
        desorption="100% customisable and SEO-friendly blog template for personal and commercial purposes."
      />
      <HomePageButton title="Daily Digest" />
      <ListOfCards data={data} />

      <HomePageButton title="Design Tools" />
      <ListOfCards data={data} />

      <HomePageButton title="Tutorials" />
      <ListOfCards data={data} />
      <Contacts />
      <CopyRight />
    </div>
  );
};
