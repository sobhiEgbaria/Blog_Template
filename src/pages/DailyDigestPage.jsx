import { NavBar } from "../components/navbar/NavBar";
import { HeaderContent } from "../components/header_content/HeaderContent";
import { Card } from "../components/cards/Card";
import { MoreArticleButton } from "../components/buttons/Buttons";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import "./Pages.css";
import img1 from "./imgs/1.jpg";

export const DailyDigestPage = () => {
  return (
    <>
      <NavBar />
      <HeaderContent
        title="Daily Digest"
        desorption="A description of the respective category goes right here. Be as expressive as possible, but in brief."
      />

      <div className="cards_section">
        <div className="card_container">
          <Card img={img1} />
          <Card img={img1} />
          <Card img={img1} />
          <MoreArticleButton />
        </div>
      </div>
      <Contacts />
      <CopyRight />
    </>
  );
};
