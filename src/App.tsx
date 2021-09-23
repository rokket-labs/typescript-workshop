import React from "react";

import { Alternatives } from "./slides/Alternatives";
import { Basics } from "./slides/Basics";
import { Cons } from "./slides/Cons";
import { Generics } from "./slides/Generics";
import { Interesting } from "./slides/Interesting";
import { Intermediate } from "./slides/Intermediate";
import { Intro } from "./slides/Intro";
import { Pros } from "./slides/Pros";
import { RokketScience } from "./slides/RokketScience";
import { StringLiterals } from "./slides/StringLiterals";
import { Thanks } from "./slides/Thanks";
import { TypeCasting } from "./slides/TypeCasting";
import { Vertical } from "./slides/Vertical";

const App = () => {
  return (
    <div className="slides">
      <RokketScience />
      <Intro />
      <Vertical />
      <Alternatives />
      <Pros />
      <Cons />
      <Basics />
      <Intermediate />
      <Generics />
      <StringLiterals />
      <TypeCasting />
      <Interesting />
      <Thanks />
    </div>
  );
};

export default App;
