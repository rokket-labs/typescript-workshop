import React from "react";

import { Alternatives } from "./slides/Alternatives";
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
    </div>
  );
};

export default App;
