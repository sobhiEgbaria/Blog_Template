import "./SinglePageHeader.css";
export const SinglePageHeader = ({ img, description, title }) => {
  return (
    <>
      <div className="singlePageContainer">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div>
          <img className="singlePageImg" src={img} alt="not_found" />
        </div>
        <div>
          <p className="singlePageDescription">{description}</p>
        </div>
      </div>
    </>
  );
};
