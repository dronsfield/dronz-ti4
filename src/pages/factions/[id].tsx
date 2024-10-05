import React from "react";
import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { convertNameToId, factionItems, factionNames } from "@/lib/factions";
import { Container } from "../../components/Container";
import styled from "styled-components";
import Link from "next/link";

const StyledContainer = styled(Container)`
  overflow: visible;
  // padding-inline: 0;

  img[data-tech-icon] {
    vertical-align: baseline;
    width: 12px;
  }

  td[data-leader-type] b {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    // margin-block-start: 1em;
  }

  div[data-source="starting_units"] p {
    margin-block-start: 0;
    // weird weird layout
  }

  h2[data-source="title1"] {
    display: none;
  }

  th {
    text-align: start;
  }

  br:only-child {
    display: none;
  }

  table {
    border-collapse: collapse;
    // margin-inline: -1rem;
    // width: calc(100% + 2rem);
    // width: 100%;
  }

  table,
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  td p:only-child,
  th p:only-child {
    margin: 0;
  }

  main {
    overflow: hidden;
    margin: -1rem;
    > *:not(table) {
      padding-inline: 1rem;
    }
    > ul {
      padding-inline: 2rem 1rem;
    }
  }
`;

type PageProps = { data: string; name: string };
type Params = { id: string };

export const getStaticPaths = (async () => {
  const paths = factionNames.map((name) => {
    const id = convertNameToId(name);
    return { params: { id } };
  });
  return { paths, fallback: false };
}) as GetStaticPaths<Params>;

export const getStaticProps = (async (context) => {
  const id = context.params?.id;
  if (!id) throw new Error("invalid faction id");
  const data = fs.readFileSync(`src/data/${id}.html`, "utf-8");
  const name = factionItems.find((item) => item.id === id)?.displayName || "";
  return { props: { data, name } };
}) satisfies GetStaticProps<PageProps, Params>;

const Page = (props: PageProps) => {
  return (
    <StyledContainer>
      <div>
        <Link href="/factions">{"<"} All factions</Link>
      </div>
      <h1>{props.name}</h1>
      <main dangerouslySetInnerHTML={{ __html: props.data }} />
    </StyledContainer>
  );
};

export default Page;
