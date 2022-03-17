import './App.css';
import TagPillsContainer from './components/TagsBar/TagPillsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarin's Space 👨‍💻</h1>
        <h2>Just a regular guy with his regular personal blog.</h2>
      </header>
      <main className='main-box-container'>
        <TagPillsContainer />
      </main>
    </div>
  );
}

export default App;
