import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SheCodes React Week 4 Homework</h1>
        <h2>Search for a city for the weather! 🌞</h2>
        <Weather />
        <h3>
          <a
            href="https://github.com/pimurphs/homework-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/filipadaguiarrodrigues/"
            target="_blank"
            rel="noreferrer"
          >
            Filipa Rodrigues
          </a>
        </h3>
      </header>
    </div>
  );
}

export default App;
