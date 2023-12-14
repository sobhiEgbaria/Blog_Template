import "./Buttons.css";
import { Link } from "react-router-dom";
export const MoreArticleButton = () => {
  return (
    <>
      <div className="MoreArticleButton_container">
        <button className="MoreArticleButton">More Article</button>
      </div>
    </>
  );
};

export const HomePageButton = ({ title }) => {
  return (
    <>
      <div className="HomePageButton_container">
        <div className="HomePageButton_flex">
          <p className="title">{title}</p>
          <Link to={title.split(" ").join("")}>
            <button className="HomePageButton">View All</button>
          </Link>
        </div>
      </div>
    </>
  );
};
