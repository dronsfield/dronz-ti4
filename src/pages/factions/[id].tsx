import React from "react";
import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { convertNameToAppPath, factionNames } from "@/lib/factions";
import { Container } from "../components/Container";
import styled from "styled-components";
import Link from "next/link";

const StyledContainer = styled(Container)`
  img[data-tech-icon] {
    vertical-align: baseline;
    width: 10px;
  }
`;

type PageProps = { data: string };
type Params = { id: string };

export const getStaticPaths = (async () => {
  const paths = factionNames.map((name) => {
    const id = convertNameToAppPath(name);
    return { params: { id } };
  });
  console.log({ paths });
  return { paths, fallback: false };
}) as GetStaticPaths<Params>;

export const getStaticProps = (async (context) => {
  const data = fs.readFileSync(`src/data/${context.params?.id}.html`, "utf-8");
  return { props: { data } };
}) satisfies GetStaticProps<PageProps, Params>;

const Page = (props: PageProps) => {
  return (
    <StyledContainer>
      <div>
        <Link href="/factions">{"<"} All factions</Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.data }} />
    </StyledContainer>
  );
};

export default Page;
