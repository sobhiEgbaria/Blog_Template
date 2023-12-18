import "./AddBlog.css";
import { Data } from "../../data/data";
import { useState } from "react";
import { useContext } from "react";
import { BlogContext } from "../../providers/blog-providers";
import img from "../notFoundPage/404.jpeg";

export const AddBlog = () => {
  const [newBlog, setNewBlog] = useState("");
  const [description, setDescription] = useState("");
  const { addBlog } = useContext(BlogContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addBlog({
      id: 1,
      title: newBlog,
      date: new Date().toLocaleDateString("en-ZA"),
      description: description,
      img: img,
    });
    setNewBlog("");
    setDescription("");
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
            <h1>Welcome To Add Blog</h1>
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
                className="addBlogText"
                name="describtion"
                id=""
                cols="10"
                rows="10"
                placeholder="Blog Description"
                onChange={handelText}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
