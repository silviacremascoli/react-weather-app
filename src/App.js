import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  function backgroundColor() {
    let time = new Date().getHours();
    if (time > 6 && time < 20) {
      document.body.classList.add("night");
      document.body.classList.remove("day");
    } else {
      document.body.classList.add("day");
      document.body.classList.remove("night");
    }
  }
  return (
    backgroundColor(),
    (
      <div className="App">
        <div className="container">
          <Weather defaultCity="Tokyo" />
          <Footer />
        </div>
      </div>
    )
  );
}
