import { NavBar } from "../components/navbar/NavBar";
import { HeaderContent } from "../components/HeaderContent/HeaderContent";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { ListOfCards } from "../components/listOfCards/List_of_cards";
import { MoreArticleButton } from "../components/buttons/Buttons";
import { Data } from "../data/data";
import { useState } from "react";
import "./Pages.css";

export const DesignToolsPage = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <NavBar />
      <HeaderContent
        title="Design Tools"
        desorption="A description of the respective category goes right here. Be as expressive as possible, but in brief."
      />
      <ListOfCards data={data} />
      <MoreArticleButton />
      <Contacts />
      <CopyRight />
    </>
  );
};
