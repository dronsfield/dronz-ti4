import { Container } from "@/components/Container";
import { createArray } from "@/util/createArray";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Grid = styled.div`
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
    <Container>
      <div style={{ marginBlockEnd: "1.5em" }}>
        <Link href="/">{"<"} All info</Link>
      </div>
      <Grid>
        {createArray(8).map((_, index) => {
          const initiative = index + 1;
          // if red tape
          // const ext = initiative === 2 ? "webp" : "png";
          const ext = "png";
          return (
            <div
              style={{ backgroundImage: `url("/sc/${initiative}.${ext}")` }}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Page;
