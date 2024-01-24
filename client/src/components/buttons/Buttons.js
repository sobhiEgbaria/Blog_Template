import "./Buttons.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { BlogContext } from "../../providers/blog-providers";

export const MoreArticleButton = () => {
  const { postNumber, setPostNumber } = useContext(BlogContext);

  const handelClick = () => {
    setPostNumber(postNumber + 3);
  };

  return (
    <>
      <div className="MoreArticleButton_container">
        <button onClick={handelClick} className="MoreArticleButton">
          More Article
        </button>
      </div>
    </>
  );
};

export const ViewAllButton = ({ title }) => {
  const handelScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="HomePageButton_container">
        <div className="HomePageButton_flex">
          <p className="title">{title}</p>
          <Link onClick={handelScroll} to={`/${title.split(" ").join("")}`}>
            <button className="HomePageButton">View All</button>
          </Link>
        </div>
      </div>
    </>
  );
};
