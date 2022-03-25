import "./App.css";
import TagPillsContainer from "./components/TagsBar/TagPillsContainer";
import BlogsContainer from "./components/MainBlogCards/BlogsContainer";
import FilterYearsBar from "./components/FilterYears/FilterYearsBar";
import MainSectionContainer from "./components/MainBlogCards/MainSectionContainer";
import AddBlog from "./components/AddBlog/AddBlog";

import ImagePlaceHolder from "./resources/myself.jpeg";

import { useState } from "react";

import { DUMMY_BLOG_ITEMS } from "./resources/ItemsForTesting";

function App() {
  const [blogsItemDict, setBlogsItemDict] = useState(DUMMY_BLOG_ITEMS);

  const filterBlogYear = (year) => {
    setYearBlogs(year);
  };

  const [yearBlogs, setYearBlogs] = useState("All");

  const onNewBlogSubmitHandler = (value) => {
    const newBlogId = Math.max(...blogsItemDict.map((blog) => blog.id)) + 1;
    setBlogsItemDict((prevState) => {
      return [
        {
          id: newBlogId,
          pictureSourcePath: ImagePlaceHolder,
          ...value,
        },
        ...prevState,
      ];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarin's Space 👨‍💻</h1>
        <h2>Just a regular guy with his regular personal blog.</h2>
      </header>
      <MainSectionContainer className="main-box-container">
        <TagPillsContainer />
        <AddBlog newBlogHandler={onNewBlogSubmitHandler} />
        <FilterYearsBar
          blogsItemDict={blogsItemDict}
          onYearBlogsFilterChange={filterBlogYear}
        />
        <BlogsContainer blogsItemDict={blogsItemDict} filterYear={yearBlogs} />
      </MainSectionContainer>
    </div>
  );
}

export default App;
