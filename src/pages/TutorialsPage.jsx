import { NavBar } from "../components/navbar/NavBar";
import { HeaderContent } from "../components/header_content/HeaderContent";
import { Card } from "../components/cards/Card";
import img3 from "./imgs/3.jpg";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";

import "./Pages.css";

export const TutorialsPage = () => {
  return (
    <>
      <NavBar />
      <HeaderContent
        title="Tutorials"
        desorption="A description of the respective category goes right here. Be as expressive as possible, but in brief."
      />
      <div className="cards_section">
        <div className="card_container">
          <Card img={img3} />
          <Card img={img3} />
          <Card img={img3} />
        </div>
      </div>
      <Contacts />
      <CopyRight />
    </>
  );
};
