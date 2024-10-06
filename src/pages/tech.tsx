import { Container } from "@/components/Container";
import React from "react";
import styled from "styled-components";

import techData from "@/data/tech/parsed.json";
import Link from "next/link";

const StyledContainer = styled(Container)``;

const techs = techData.filter((tech) => {
  return ["base", "pok"].includes(tech.source) && !tech.suffix;
});

const Tiles = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem; /* Space between boxes */
`;

const StyledTech = styled.div`
  border: 1px solid #bbb;
  border-radius: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Name = styled.h2`
  font-size: 0.7em;
  font-weight: bold;
  margin: 0;
  padding: 0.3rem 0.5rem;
  border-bottom: 1px solid #bbb;
  text-transform: uppercase;
  line-height: 1;
`;

const Info = styled.p`
  margin: 0;
  padding: 0.3rem 0.5rem;
  min-height: 8em;
  font-size: 0.7em;
  white-space: pre-wrap;
  line-height: 1;
  opacity: 0.67;
`;

const Reqs = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0.2em 0.3em;
  gap: 0.2em;

  img {
    width: 1em;
  }
`;

const Type = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.2em;

  img {
    width: 1.3em;
    object-fit: contain;
    object-position: center center;
    height: 1.5em;
  }
`;

const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  ${(p) =>
    p.$visible
      ? `
  background-color: rgba(0, 0, 0, 0.5);  
  `
      : `
  background-color: rgba(0, 0, 0, 0.0);
  pointer-events: none;
  `}
`;

const Page = () => {
  const [hasSelected, setHasSelected] = React.useState(false);

  return (
    <>
      <StyledContainer>
        <div>
          <Link href="/">{"<"} All info</Link>
        </div>
        <Tiles>
          {techs.map((tech) => {
            return (
              <StyledTech
                key={tech.id}
                data-id={tech.id}
                onClick={(evt) => {
                  const el: HTMLDivElement = document.querySelector(
                    `[data-id="${tech.id}"]`
                  )!;
                  if (!hasSelected) {
                    evt.stopPropagation();
                    const clone = el.cloneNode(true);
                    const bounds = el.getBoundingClientRect();
                    // @ts-ignore
                    clone.style = `height: ${bounds.height}px; width: ${
                      bounds.width
                    }px; transform: scale(2); position: fixed; top: 50%; left: 50%; margin-top: -${
                      1 * bounds.height
                    }px; margin-left: -${0.5 * bounds.width}px; z-index: 1`;
                    document.querySelector("#overlay")?.appendChild(clone);
                  }
                  setHasSelected(true);
                }}
              >
                <Name>{tech.name}</Name>
                <Info>{tech.info.join("\n")}</Info>
                <Reqs>
                  {tech.reqs.map((req) => {
                    return <img src={`/Ti_icons_${req}.webp`} />;
                  })}
                </Reqs>
                {tech.type === "UnitUpgradeTech" ? null : (
                  <Type>
                    <img src={`/Ti_icons_${tech.type}.webp`} />
                  </Type>
                )}
              </StyledTech>
            );
          })}
        </Tiles>
      </StyledContainer>
      <Overlay
        $visible={hasSelected}
        id="overlay"
        onClick={(evt) => {
          // @ts-ignore
          if (evt.target.id === "overlay") {
            setHasSelected(false);
            // @ts-ignore
            evt.target.innerHTML = "";
          }
        }}
      />
    </>
  );
};

export default Page;
