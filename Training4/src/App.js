import logo from "./logo.svg";
import "./App.css";
import JokeAPI from "./Task1/JokeAPI";
import CountriesAPI from "./Task2/CountriesAPI.js";

function App() {
  return (
    <div className="App">
      <h1 id="topBanner">JokeAPI</h1>
      <JokeAPI />
      <h1 id="topBanner" style={{ marginTop: "50px" }}>
        CountriesAPI
      </h1>
      <div className="container">
      <CountriesAPI />
      </div>
    </div>
  );
}

export default App;
