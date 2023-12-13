import "./HeaderContent.css";

export const HeaderContent = ({ title, desorption }) => {
  return (
    <>
      <div className="HeaderContent">
        <div className="content_frame">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="desorption">
            <p>{desorption}</p>
          </div>
        </div>
      </div>
    </>
  );
};
