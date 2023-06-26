import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  // function that changes the background color between light and dark according to the current time
  const backgroundColor = () => {
    let time = new Date().getHours();
    if (time > 6 && time < 20) {
      document.body.classList.add("day");
      document.body.classList.remove("night");
    } else {
      document.body.classList.add("night");
      document.body.classList.remove("day");
    }
  };
  return (
    backgroundColor(),
    (
      <div className="App">
        <div className="container">
          <Weather defaultCity="Milan" />
          <Footer />
        </div>
      </div>
    )
  );
}
