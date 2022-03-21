import "./BlogsContainer.css";

function BlogsContainer(props) {
  const blogsItemDict = props.blogsItemDict;

  const blogsComponents = [];
  blogsItemDict.forEach((blog) =>
    blogsComponents.push(
      <article className="blog-card">
        <div className="blog-card__picture">
          <img src={blog.pictureSourcePath} alt={blog.blogHeader} />
        </div>
        <div className="blog-card__desc">
          <div className="blog-card__desc-header">
            
            <div className="blog-card__desc-datetime">{blog.blogDatetime}</div>
            <div>{blog.blogHeader}</div>
          </div>
          <div className="blog-card__desc-main">{blog.blogDescription}</div>
        </div>
      </article>
    )
  );

  return <section className="blog-container">{blogsComponents}</section>;
}

export default BlogsContainer;
