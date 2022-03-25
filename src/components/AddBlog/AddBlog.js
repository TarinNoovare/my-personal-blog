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
  };

  const onSubmitlButton = (event) => {
    props.newBlogHandler({
      blogHeader: newBlogTitle,
      blogDescription: newBlogDescription,
      blogDatetime: newBlogDate,
    });
    setNewBlogTitle("");
    setNewBlogDescription("");
    setNewBlogDate("");
  };

  return (
    <div>
      <form className="blog-forms">
        <div className="blog-form-containter">
          <label>
            Blog Title:
            <input
              type="text"
              value={newBlogTitle}
              onChange={newTitleChangeHandler}
              required
            />
          </label>
        </div>
        <div className="blog-form-containter">
          <label>
            Blog Description:
            <input
              type="text"
              value={newBlogDescription}
              onChange={newDescChangeHandler}
              required
            />
          </label>
        </div>
        <div className="blog-form-containter">
          <label>
            Blog Datetime:
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
          <button type="button" value="submit" onClick={onSubmitlButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
