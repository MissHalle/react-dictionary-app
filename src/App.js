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
        This React Dictionary Application was coded by{" "}
        <a
          href="https://www.linkedin.com/in/halle-gregory-1387a822b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Halle Gregory
        </a>{" "}
        and
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
