import "./TagPillsContainer.css";

function TagPillsContainer() {
  const tagsPillList = [
    "Travel",
    "DataSci",
    "Coding",
    "Stats",
    "Meme",
    "ML",
    "React",
    "Life & Work",
    "Books",
    "P-value",
    "Bruh",
  ];
  const tagsPillListComponent = [];

  const onTagButtonClickHandler = (event) => {
    console.log(event.target.value);
  };

  tagsPillList.forEach((tag) =>
    tagsPillListComponent.push(
      <button
        className="tag-pill"
        value={tag}
        onClick={onTagButtonClickHandler}
      >
        {tag}
      </button>
    )
  );

  return <div className="tag-pills-container">{tagsPillListComponent}</div>;
}

export default TagPillsContainer;
