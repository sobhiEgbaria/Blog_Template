import "./BlogCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const BlogCard = ({ img, title, description, date, id }) => {
  const [isLike, setIsLike] = useState(false);
  const [isBookMark, setIsBookMark] = useState(false);
  const scrollWin = () => {
    window.scrollTo(0, 0);
  };

  const handelLikeClick = () => {
    setIsLike(!isLike);
  };
  const handelBookMarkClick = () => {
    setIsBookMark(!isBookMark);
  };

  return (
    <>
      <div className="card">
        <div className="content">
          <p className="date">
            {isBookMark ? (
              <i
                onClick={handelBookMarkClick}
                id="icon_bookmark"
                className="fa-solid fa-bookmark"
                style={{ color: "#4FFFB0" }}
              ></i>
            ) : (
              <i
                onClick={handelBookMarkClick}
                id="icon_bookmark"
                className="fa-regular fa-bookmark"
              ></i>
            )}

            {date.slice(0, 10)}
          </p>
          <h3 className="title">{title}</h3>
          <p className="description">
            {description}
            <span>
              <Link onClick={scrollWin} className="cardLink" to={`/${id}`}>
                &nbsp; Read More<i className="fa-solid fa-angles-right"></i>
              </Link>
            </span>
            <div>
              {isLike ? (
                <i
                  onClick={handelLikeClick}
                  id="icon"
                  className="fa-solid fa-heart"
                  style={{ color: "red" }}
                ></i>
              ) : (
                <i
                  onClick={handelLikeClick}
                  id="icon"
                  className="fa-regular fa-heart"
                ></i>
              )}

              <i id="icon" className="fa-regular fa-message"></i>
              <i id="icon" className="fa-regular fa-paper-plane"></i>
            </div>
          </p>
        </div>
        <img src={img} alt="Avatar" />
      </div>
    </>
  );
};
