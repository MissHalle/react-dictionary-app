import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Search />
        </main>
        <div className="results">Get definitions, synonyms, and more</div>
      </div>
      <footer className="App-footer">
        React Dictionary Application created by Halle Gregory and
        <a
          href="https://github.com/MissHalle/react-dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
