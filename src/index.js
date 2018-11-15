import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter";
import "./styles.css";
import Tilt from "./components/VanillaTilt";
import "./components/VanillaTilt.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <div className="totally-centered">
        <Tilt>
          <div className="totally-centered">vanilla-tilt.js</div>
        </Tilt>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
