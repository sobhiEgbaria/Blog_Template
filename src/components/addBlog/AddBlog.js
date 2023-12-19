import "./AddBlog.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BlogContext } from "../../providers/blog-providers";
import img from "../notFoundPage/404.jpeg";

export const AddBlog = () => {
  const navigate = useNavigate();
  const { addBlog } = useContext(BlogContext);

  const [newBlog, setNewBlog] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // add not adding in enter
  };

  const handleOnClickAddBlog = () => {
    addBlog({
      id: Date.now(),
      title: newBlog,
      date: new Date().toLocaleDateString("en-ZA"),
      description: description,
      img: img,
    });
    setNewBlog("");
    setDescription("");
    navigate("/");
  };

  const handleOnClickEditBlog = () => {
    console.log("gogo lolo");
  };

  const handelInput = (event) => {
    setNewBlog(event.target.value);
  };
  const handelText = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <div className="BlogHeaderContent">
        <div className="content_frame">
          <div className="title">
            <h1>Share Your Blog With Us</h1>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                className="addBlogInput"
                value={newBlog}
                type="text"
                placeholder="Blog Title"
                onChange={handelInput}
              />
            </div>
            <div>
              <textarea
                value={description}
                className="addBlogText"
                name="describtion"
                id=""
                cols="10"
                rows="10"
                placeholder="Blog Description"
                onChange={handelText}
              ></textarea>
            </div>
            <button onClick={handleOnClickAddBlog}>Add Blog</button>
            <button onClick={handleOnClickEditBlog}>Edit Blog</button>
          </form>
        </div>
      </div>
    </>
  );
};
