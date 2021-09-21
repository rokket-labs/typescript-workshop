import React from "react";
import ReactDOM from "react-dom";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

import App from "./App";

import "./highlight.js/onedark.css";
import "./style.css";

const app = document.querySelector<HTMLDivElement>(".reveal");

if (!app) throw Error("No app div");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  app
);

const deck = new Reveal({
  plugins: [Markdown, Highlight],
});

deck.initialize();
