import "./Pages.css";
import { NavBar } from "../components/navbar/NavBar";
import { HeaderContent } from "../components/HeaderContent/HeaderContent";
import { ListOfCards } from "../components/listOfCards/List_of_cards";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { MoreArticleButton } from "../components/buttons/Buttons";
import { BlogContext } from "../providers/blog-providers";
import { useContext } from "react";

export const TutorialsPage = () => {
  const data = useContext(BlogContext);

  return (
    <>
      <NavBar />
      <HeaderContent
        title="Tutorials"
        desorption="A description of the respective category goes right here. Be as expressive as possible, but in brief."
      />
      <ListOfCards data={data} />
      <MoreArticleButton />

      <Contacts />
      <CopyRight />
    </>
  );
};
