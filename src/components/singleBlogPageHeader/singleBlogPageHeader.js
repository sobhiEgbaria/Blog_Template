import "./singleBlogPageHeader.css";
import { Link } from "react-router-dom";

export const SingleBlogPageHeader = ({
  img,
  description,
  title,
  id,
  deleteBlogById,
}) => {
  const handelDeleteClick = (e) => {
    deleteBlogById(id);
  };

  return (
    <>
      <div className="singlePageContainer">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div>
          <div className="edit_remove_icons">
            <Link to="/" onClick={handelDeleteClick}>
              <i class="fa-solid fa-trash"></i>
            </Link>
            <Link to={`/EditBlogPage/${id}`}>
              <i class="fa-solid fa-pen-to-square"></i>
            </Link>
          </div>
          <img className="singlePageImg" src={img} alt="not_found" />
        </div>
        <div>
          <p className="singlePageDescription">{description}</p>
        </div>
      </div>
    </>
  );
};