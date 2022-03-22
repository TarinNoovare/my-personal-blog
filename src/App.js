import "./App.css";
import TagPillsContainer from "./components/TagsBar/TagPillsContainer";
import BlogsContainer from "./components/MainBlogCards/BlogsContainer";
import FilterYearsBar from "./components/FilterYears/FilterYearsBar";
import MainSectionContainer from "./components/MainBlogCards/MainSectionContainer";

import { useState } from "react";

import { DUMMY_BLOG_ITEMS } from "./resources/ItemsForTesting";

function App() {
  const [blogsItemDict, setBlogsItemDict] = useState(DUMMY_BLOG_ITEMS);

  const filterBlogYear = (year) => {
    setYearBlogs(year);
  };

  const [yearBlogs, setYearBlogs] = useState("All");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarin's Space 👨‍💻</h1>
        <h2>Just a regular guy with his regular personal blog.</h2>
        <TagPillsContainer />
      </header>
      <MainSectionContainer className="main-box-container">
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
