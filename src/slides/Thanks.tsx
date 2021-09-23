import React from "react";

import styled from "styled-components";

import RokketScienceLogo from "../assets/rokketscience.svg";

const Logo = styled.img.attrs({ src: RokketScienceLogo })`
  height: 100px;
`;
export const Thanks = () => {
  return (
    <section>
      <h1>Gracias!</h1>
      <Logo />
      <br />
      <a
        href="https://github.com/rokket-labs/typescript-workshop"
        target="_blank"
      >
        Repositorio de esta presentación
      </a>
    </section>
  );
};
