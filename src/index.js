import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Barcode from "./Barcode";

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Barcode/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
