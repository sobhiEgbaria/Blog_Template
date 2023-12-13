import { NavBar } from "../components/navbar/NavBar";
import { HomePageHeaderContent } from "../components/homePage_header_content/HomePageHeaderContent";
import { ListOfCards } from "../components/list_of_cards/List_of_cards";
export const HomePage = () => {
  return (
    <div id="HomePage">
      <NavBar />
      <HomePageHeaderContent
        title="Minimal blog template for creative expressions"
        desorption="100% customisable and SEO-friendly blog template for personal and commercial purposes."
      />
      <ListOfCards />
    </div>
  );
};
