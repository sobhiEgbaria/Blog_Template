import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ img, title, description, date, id }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <div className="card">
          <div className="content">
            <p className="date">{date}</p>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
          </div>
          <img src={img} alt="Avatar" />
        </div>
      </Link>
    </>
  );
};
