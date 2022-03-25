import "./TagPillsContainer.css";
import { useState } from "react";

function TagPillsContainer() {
  // TODO: Fix pill components to each has unique key property
  const [selectedTagsPillList, setSelectedTagsPillList] = useState({
    Books: "selected",
    Bruh: "selected",
    Coding: "selected",
    DataSci: "selected",
    "Life & Work": "selected",
    Meme: "selected",
    ML: "selected",
    "P-value": "selected",
    React: "selected",
    Stats: "selected",
    Travel: "selected",
  });

  const onTagPillSelect = (event) => {
    const tagName = event.target.value;
    const tagStatus = selectedTagsPillList[tagName];
    const tagNewStatus = tagStatus === "selected" ? "non-selected" : "selected";

    setSelectedTagsPillList((prevState) => {
      return {
        ...prevState,
        [tagName]: tagNewStatus,
      };
    });
  };

  const tagsPillListComponent = [];
  for (let key in selectedTagsPillList) {
    const isPillShow = selectedTagsPillList[key] === "selected";
    tagsPillListComponent.push(
      <button
        className="tag-pill"
        style={{ opacity: isPillShow ? "100%" : "35%" }}
        value={key}
        onClick={onTagPillSelect}
      >
        {key}
      </button>
    );
  }
  return <div className="tag-pills-container">{tagsPillListComponent}</div>;
}

export default TagPillsContainer;
