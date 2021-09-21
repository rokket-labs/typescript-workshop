import React from "react";

import { Alternatives } from "./slides/Alternatives";
import { Basics } from "./slides/Basics";
import { Cons } from "./slides/Cons";
import { Generics } from "./slides/Generics";
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
      <Basics />
      <Generics />
    </div>
  );
};

export default App;
