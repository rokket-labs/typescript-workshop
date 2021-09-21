import React from "react";
import styled from "styled-components";

import Subset from "../assets/subset.png";

const Image = styled.img`
  height: 500px;
`;

export const Vertical = () => (
  <section>
    <section>
      <h2>¿Qué es Typescript?</h2>
    </section>
    <section>Lenguaje desarrollado por Microsoft, nace el 2012 </section>

    <section>
      <h2>¿Qué es Typescript?</h2>

      <ul>
        <li className="fragment highlight-red">Superset de Javascript</li>
        <li>Añade tipado</li>
      </ul>
    </section>
    <section>
      <h2>¿Qué es Typescript?</h2>
      <Image src={Subset} />
    </section>
  </section>
);
