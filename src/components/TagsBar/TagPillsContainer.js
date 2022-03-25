import "./TagPillsContainer.css";
import { useState } from "react";

function TagPillsContainer() {

  // TODO: Edit tags data type to also save theirs unique ID
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
  let tagIndex = 0;
  for (let key in selectedTagsPillList) {
    const isPillShow = selectedTagsPillList[key] === "selected";
    tagsPillListComponent.push(
      <button
        className="tag-pill"
        style={{ opacity: isPillShow ? "100%" : "35%" }}
        value={key}
        key={tagIndex}
        onClick={onTagPillSelect}
      >
        {key}
      </button>
    );

    tagIndex += 1;
  }
  return <div className="tag-pills-container">{tagsPillListComponent}</div>;
}

export default TagPillsContainer;
