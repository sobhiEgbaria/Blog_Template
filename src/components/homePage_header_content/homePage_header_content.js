import "./homePage_header_content.css";

export const HomePage_header_content = ({ title, desorption }) => {
  return (
    <>
      <div className="HeaderContent">
        <div className="content_frame">
          <div className="title">
            <span className="hi_button">👋 Meet Personally</span>
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