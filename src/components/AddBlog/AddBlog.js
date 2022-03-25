import { useState } from "react";
import "./AddBlog.css";

function AddBlog(props) {
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogDescription, setNewBlogDescription] = useState("");
  const [newBlogDate, setNewBlogDate] = useState("");

  const newTitleChangeHandler = (event) => {
    setNewBlogTitle(event.target.value);
  };

  const newDescChangeHandler = (event) => {
    setNewBlogDescription(event.target.value);
  };

  const newDateChangeHandler = (event) => {
    setNewBlogDate(event.target.value);
  };

  const onCancelButton = () => {
    setNewBlogTitle("");
    setNewBlogDescription("");
    setNewBlogDate("");

    setIsEditing(false);
  };

  const onSubmitButton = (event) => {
    props.newBlogHandler({
      blogHeader: newBlogTitle,
      blogDescription: newBlogDescription,
      blogDatetime: newBlogDate,
    });
    setNewBlogTitle("");
    setNewBlogDescription("");
    setNewBlogDate("");

    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const onNewBlogEditing = (event) => {
    setIsEditing(true);
  };

  const openNewBlogFormPrompt = (
    <div
      className="add-blog-form-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button type="button" onClick={onNewBlogEditing}>
        Add New Blog
      </button>
    </div>
  );

  const addNewBlogForm = (
    <div className="add-blog-form-container">
      <form className="add-blog-form-container__forms">
        <div className="blog-form-input">
          <label>
            Blog Title:
            <br />
            <input
              type="text"
              value={newBlogTitle}
              onChange={newTitleChangeHandler}
              required
            />
          </label>
        </div>
        <div className="blog-form-input">
          <label>
            Blog Description:
            <br />
            <input
              type="text"
              value={newBlogDescription}
              onChange={newDescChangeHandler}
              required
            />
          </label>
        </div>
        <div className="blog-form-input">
          <label>
            Blog Datetime:
            <br />
            <input
              type="date"
              value={newBlogDate}
              onChange={newDateChangeHandler}
              required
            />
          </label>
        </div>
        <div className="blog-form-button">
          <button type="button" value="cancel" onClick={onCancelButton}>
            Cancel
          </button>
          <button type="button" value="submit" onClick={onSubmitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  return isEditing ? addNewBlogForm : openNewBlogFormPrompt;
}

export default AddBlog;
