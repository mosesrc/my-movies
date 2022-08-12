import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navBar/navbar";
import { Outlet } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default App;
