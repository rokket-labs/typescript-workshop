import React from "react";
import styled from "styled-components";

import RokketScienceLogo from "../assets/rokketscience.svg";

const Logo = styled.img.attrs({ src: RokketScienceLogo })`
  height: 200px;
`;

export const RokketScience = () => {
  return (
    <section>
      <Logo />
    </section>
  );
};
