import { NavBar } from "../components/navbar/NavBar";
import { HeaderContent } from "../components/header_content/HeaderContent";
import { Card } from "../components/cards/Card";
import img2 from "./imgs/2.jpg";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";

import "./Pages.css";

export const DesignToolsPage = () => {
  return (
    <>
      <NavBar />
      <HeaderContent
        title="Design Tools"
        desorption="A description of the respective category goes right here. Be as expressive as possible, but in brief."
      />
      <div className="cards_section">
        <div className="card_container">
          <Card img={img2} />
          <Card img={img2} />
          <Card img={img2} />
        </div>
      </div>
      <Contacts />
      <CopyRight />
    </>
  );
};
