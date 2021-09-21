import React from "react";

import Flow from "../assets/flow.png";
import Purescript from "../assets/purescript.png";
import NpmTrends from "../assets/npm-trends.png";

export const Alternatives = () => {
  return (
    <section>
      <section>
        <h2>Alternativas</h2>
      </section>
      <section>
        <img src={Flow} />
      </section>

      <section>
        <img src={Purescript} />
      </section>
      <section>
        <img src={NpmTrends} />
      </section>
    </section>
  );
};
