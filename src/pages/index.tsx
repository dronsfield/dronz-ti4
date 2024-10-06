import Link from "next/link";
import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  li {
    font-size: 1.2em;
    line-height: 1.5;
  }
`;

export function Home() {
  return (
    <StyledContainer>
      <h1>TI4 Info</h1>
      <ul>
        <li>
          <Link href="/factions">Factions</Link>
        </li>
        <li>
          <Link href="/tech">Tech</Link>
        </li>
        <li>
          <Link href="/ac">Action cards</Link>
        </li>
        <li>
          <Link href="/sc">Strategy cards</Link>
        </li>
      </ul>
    </StyledContainer>
  );
}

export default Home;
