import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Menu from "./routes/menu/menu";
import About from "./routes/about/about";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<App />}>
        <Route path='menu' element={<Menu />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
