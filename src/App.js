import "./App.css";
import TagPillsContainer from "./components/TagsBar/TagPillsContainer";
import BlogsContainer from "./components/MainBlogCards/BlogsContainer";
import FilterYearsBar from "./components/FilterYears/FilterYearsBar";

function App() {
  const blogsItemDict = [
    {
      id: 1,
      blogHeader: "Black Cat",
      pictureSourcePath: require("./resources/cat.jpeg"),
      blogDescription:
        "Picture of a black cat wearing a motorcycle taxi trying to earn for his meal.",
      blogDatetime: "2021-01-01",
    },
    {
      id: 2,
      blogHeader: "Myself",
      pictureSourcePath: require("./resources/myself.jpeg"),
      blogDescription: "Picture of Myself, selfied by using my New iPad Mini!",
      blogDatetime: "2022-01-01",
    },
    {
      id: 3,
      blogHeader: "Fitness First @SiamParagon",
      pictureSourcePath: require("./resources/fitness_first.jpeg"),
      blogDescription:
        "Fitness First View at Siam Paragon. So much spacious here!",
      blogDatetime: "2023-06-01",
    },
    {
      id: 4,
      blogHeader: "Omu Rice",
      pictureSourcePath: require("./resources/omu.jpeg"),
      blogDescription:
        "My First Japanese-like Omu Rice at Central World. Yum!!",
      blogDatetime: "2023-02-01",
    },
    {
      id: 5,
      blogHeader: "Omu Rice",
      pictureSourcePath: require("./resources/omu.jpeg"),
      blogDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      blogDatetime: "2021-12-15",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarin's Space 👨‍💻</h1>
        <h2>Just a regular guy with his regular personal blog.</h2>
        <TagPillsContainer />
      </header>
      <main className="main-box-container">
        <FilterYearsBar />
        <BlogsContainer blogsItemDict={blogsItemDict} />
      </main>
    </div>
  );
}

export default App;
