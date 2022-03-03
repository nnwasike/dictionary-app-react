import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
          <Search />
        </main>
        <br />
        <footer>
          <a
            href="https://github.com/nnwasike/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://frosty-noether-fa80c2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Nwakego Nwasike
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
