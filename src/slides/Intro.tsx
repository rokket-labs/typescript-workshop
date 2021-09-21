import React from "react";
import styled from "styled-components";

import LogoData from "../assets/typescript_logo.png";

const Logo = styled.img.attrs({
  src: LogoData,
})`
  height: 300px;
`;

export const Intro = () => {
  return (
    <section>
      <Logo />
      <h1>Typescript</h1>
    </section>
  );
};
