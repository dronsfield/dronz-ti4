import { Container } from "@/components/Container";
import { createArray } from "@/util/createArray";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1em;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  & > div {
    padding-top: 125%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

const Page = () => {
  return (
    <StyledContainer>
      {createArray(8).map((_, index) => {
        const initiative = index + 1;
        const ext = initiative === 2 ? "webp" : "png";
        return (
          <div style={{ backgroundImage: `url("/sc/${initiative}.${ext}")` }} />
        );
      })}
    </StyledContainer>
  );
};

export default Page;
