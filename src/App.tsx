import React from "react";

import { Alternatives } from "./slides/Alternatives";
import { Code } from "./slides/Code";
import { Cons } from "./slides/Cons";
import { Intro } from "./slides/Intro";
import { Pros } from "./slides/Pros";
import { Vertical } from "./slides/Vertical";

const App = () => {
  return (
    <div className="slides">
      <Intro />
      <Vertical />
      <Alternatives />
      <Pros />
      <Cons />
      <Code />
    </div>
  );
};

export default App;
