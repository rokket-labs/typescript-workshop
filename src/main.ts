import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

import "./style.css";

const app = document.querySelector<HTMLDivElement>(".reveal");

if (!app) throw Error("No app div");

const deck = new Reveal({
  plugins: [Markdown],
});

deck.initialize();
