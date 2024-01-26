import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a
        href="https://github.com/punkername007"
        target="_blank"
        rel="noreferrer"
      >
        Selene Roa
      </a>
      . It is open-sourced on{" "}
      <a
        href="https://github.com/punkername007/dictionary-project"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://sr-dictionary-react.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
