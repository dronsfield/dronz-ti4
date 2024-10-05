import Link from "next/link";
import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";

export function Home() {
  return (
    <Container>
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
      </ul>
    </Container>
  );
}

export default Home;
