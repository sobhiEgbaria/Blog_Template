import "./addAndEditBlog.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../providers/blog-providers";

export const AddAndEditBlog = ({
  buttonText,
  title,
  description,
  body,
  hederTitle,
  EditedBlogId,
}) => {
  const navigate = useNavigate();
  const { addBlog, editBlogById } = useContext(BlogContext);

  const [newBlogTitle, setNewBlogTitle] = useState(title);
  const [newBlogDescription, setNewBlogDescription] = useState(description);
  const [newBlogBody, setNewBlogBody] = useState(body);
  const [newBlogImage, setNewBlogImage] = useState("");
  const [newBlogSelect, setNewBlogSelect] = useState("blog category");

  const scrollWin = () => {
    window.scrollTo(0, 700);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnClickAddBlog = () => {
    addBlog({
      title: newBlogTitle,
      description: newBlogDescription,
      body: newBlogBody,
      img: newBlogImage,
      category: newBlogSelect,
    });
    //clear the input and the text area
    setNewBlogTitle("");
    setNewBlogDescription("");
    navigate("/HomePage");
    scrollWin();
  };

  const handleOnClickEditBlog = () => {
    editBlogById(EditedBlogId, newBlogTitle, newBlogDescription);
    navigate("/HomePage");
    scrollWin();
  };

  const handelTitle = (event) => {
    setNewBlogTitle(event.target.value);
  };

  const handelDescription = (event) => {
    setNewBlogDescription(event.target.value);
  };

  const handelBody = (event) => {
    setNewBlogBody(event.target.value);
  };
  const handelImage = (event) => {
    setNewBlogImage(event.target.value);
  };
  const handelSelect = (event) => {
    setNewBlogSelect(event.target.value);
  };

  return (
    <>
      <div className="BlogHeaderContent">
        <div className="content_frame">
          <div className="title">
            <h1>{hederTitle}</h1>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                className="addBlogInput"
                value={newBlogTitle}
                type="text"
                placeholder="Blog Title"
                onChange={handelTitle}
              />
            </div>
            <div>
              <textarea
                value={newBlogDescription}
                className="addBlogText"
                name="description"
                id=""
                cols="5"
                rows="5"
                placeholder="Blog Description"
                onChange={handelDescription}
              ></textarea>
            </div>
            <div>
              <textarea
                value={newBlogBody}
                className="addBlogText"
                name="body"
                id=""
                cols="10"
                rows="10"
                placeholder="Blog body"
                onChange={handelBody}
              ></textarea>
            </div>

            <div>
              <input
                className="addBlogInput"
                value={newBlogImage}
                type="text"
                placeholder="Insert Image URL"
                onChange={handelImage}
              />
            </div>
            <div className="category">
              <label for="pick-one">Category</label>
              <select
                value={newBlogSelect}
                onChange={handelSelect}
                id="pick-one"
              >
                <option value="Programming Languages">
                  Programming Languages
                </option>
                <option value="CS">CS</option>
                <option value="TOOLS">TOOLS</option>
              </select>
            </div>

            <button
              // to pik create or edit blog
              onClick={
                buttonText === "Create Blog"
                  ? handleOnClickAddBlog
                  : handleOnClickEditBlog
              }
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
