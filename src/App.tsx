import React from "react";

import { Intro } from "./slides/Intro";
import { Vertical } from "./slides/Vertical";

const App = () => {
  return (
    <div className="slides">
      <Intro />
      <Vertical />
    </div>
  );
};

export default App;
