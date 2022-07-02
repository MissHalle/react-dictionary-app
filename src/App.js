import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="Dictionary-header">Dictionary</div>{" "}
        </header>
        <input type="search" placeholder="Type a word here" onFocus="true" />
        <div className="">Get definitions, synonyms, and more</div>
      </div>
      <footer>
        React Dictionary Application created by Halle Gregory and
        <a href="" target="_blank" rel="noopener noreffer">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
