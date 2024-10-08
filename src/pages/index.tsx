import Link from "next/link";
import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  li {
    font-size: 1.2em;
    line-height: 1.5;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const LinksContainer = styled.ul`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem; /* Space between boxes */
`;

const PageLink = styled(Link)`
  all: unset;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: bold;
  gap: 1em;

  img {
    width: 1.3em;
    object-fit: contain;
    object-position: center center;
    object-repeat: norepeat;
    height: 1.5em;
  }
`;

const linksConfig = [
  {
    href: "/factions",
    text: "Factions",
    image: "/hm",
  },
  {
    href: "/ac",
    text: "Action cards",
    image: "/home/ac.jpeg",
  },
  {
    href: "/tech",
    text: "Tech",
    image: "/hm",
  },
  {
    href: "/po",
    text: "Public objectives",
    image: "/hm",
  },
];

export function Home() {
  return (
    <StyledContainer>
      <h1>TI4 Info</h1>

      {/* <LinksContainer>
        {linksConfig.map((config) => {
          return (
            <PageLink href={config.href}>
              <img src={config.image} />
              <span>{config.text}</span>
            </PageLink>
          );
        })}
      </LinksContainer> */}

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
        <li>
          <Link href="/po">Public objectives</Link>
        </li>
        <li>
          <Link href="/so">Secret objectives</Link>
        </li>
        <li>
          <Link href="/exploration">Exploration cards</Link>
        </li>
        <li>
          <Link href="/relic">Relics</Link>
        </li>
      </ul>
    </StyledContainer>
  );
}

export default Home;
