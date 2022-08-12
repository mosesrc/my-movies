import React, { Component } from "react";
import "./App.css";
import Collections from "./components/collections/collections";
import Navbar from "./components/navBar/navbar";
import { actionCollection } from "./data/actionCollection";
import { comedyCollection } from "./data/comedyCollection";
import { romanceCollection } from "./data/romanceCollection";
import { Outlet } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      collectionsData: {
        actionCollection,
        romanceCollection,
        comedyCollection,
      },
    };
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
