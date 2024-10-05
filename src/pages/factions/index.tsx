import React from "react";
import {
  convertNameToDisplay,
  convertNameToId,
  factionNames,
} from "@/lib/factions";
import { Container } from "@/components/Container";
import styled from "styled-components";
import Link from "next/link";
import { sortBy } from "@/util/sortBy";

const StyledContainer = styled(Container)`
  li {
    margin-bottom: 0.5em;
  }
`;
const items = sortBy(
  factionNames.map((name) => {
    const displayName = convertNameToDisplay(name);
    const url = `/factions/${convertNameToId(name)}`;
    return { name, displayName, url };
  }),
  "displayName"
);

const Page = () => {
  return (
    <StyledContainer>
      <h1>Factions</h1>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <Link href={item.url}>{item.displayName}</Link>
            </li>
          );
        })}
      </ul>
    </StyledContainer>
  );
};

export default Page;
