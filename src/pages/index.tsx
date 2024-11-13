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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.75em;
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
  padding: 0.8em 0.8em;
  border: 1px solid #ddd;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: bold;
  gap: 0.67em;
  height: 2.5em;
  border-radius: 2px;

  &:focus,
  &:active {
    border-color: currentColor;
  }

  div {
    width: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    img {
      height: 2.5em;

      border-radius: 3px;
    }
  }
`;

const linksConfig = [
  {
    href: "/factions",
    text: "Factions",
    image: "/home/empyrean.webp",
  },
  {
    href: "/tech",
    text: "Tech",
    image: "/home/tech.png",
  },
  {
    href: "/sc",
    text: "Strategy cards",
    image: "/home/imp.png",
  },
  {
    href: "/ac",
    text: "Action cards",
    image: "/home/ac.jpg",
  },
  {
    href: "/po",
    text: "Public objectives",
    image: "/home/po.jpg",
  },
  {
    href: "/so",
    text: "Secret objectives",
    image: "/home/so.jpg",
  },
  {
    href: "/exploration",
    text: "Exploration cards",
    image: "/home/cultural.webp",
  },
  {
    href: "/relic",
    text: "Relics",
    image: "/home/relic.webp",
  },
  {
    href: "/agenda",
    text: "Agendas",
    image: "/home/agenda.jpeg",
  },
];

export function Home() {
  return (
    <StyledContainer>
      <h1 style={{ fontFamily: "monospace" }}>ti4.dronz</h1>

      <LinksContainer>
        {linksConfig.map((config) => {
          return (
            <PageLink href={config.href}>
              <div>
                <img src={config.image} />
              </div>
              <span>{config.text}</span>
            </PageLink>
          );
        })}
      </LinksContainer>
    </StyledContainer>
  );
}

export default Home;
