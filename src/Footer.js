import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p>
          This project was coded by{" "}
          <a href="https://responsive-portfolio-cremascoli.netlify.app/">
            Silvia Cremascoli
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/silviacremascoli/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          🚀
        </p>
      </footer>
    </div>
  );
}
