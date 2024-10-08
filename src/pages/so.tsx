import styled from "styled-components";
import { Container } from "@/components/Container";
import Link from "next/link";
import StarredList from "@/components/StarredList";
import { sortBy } from "@/util/sortBy";
import allObjectives from "@/data/obj/obj.json";

const items = sortBy(
  allObjectives.filter((obj) => obj.objType === "so"),
  "name"
);

const StyledContainer = styled(Container)`
  ul {
    padding-left: 1rem;
  }
  li {
    margin-bottom: 0.5em;
    // list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    font-size: 1.1em;
  }
`;

const Page = () => {
  const renderSo = (item: (typeof items)[number]) => {
    return (
      <li key={item.id}>
        <div
          style={{
            padding: "0.25em 1em 0.25em 0.25em",
          }}
        >
          <div>
            <strong>{item.name}</strong>
          </div>
          <div style={{ opacity: 0.67 }}>{item.condition}</div>
        </div>
      </li>
    );
  };
  return (
    <StyledContainer>
      <div>
        <Link href="/">{"<"} All info</Link>
      </div>
      <h1>Secret Objectives</h1>
      <h2>Action phase</h2>
      <ul>{items.filter((item) => item.phase === "action").map(renderSo)}</ul>
      <h2>Status phase</h2>
      <ul>{items.filter((item) => item.phase === "status").map(renderSo)}</ul>
      <h2>Agenda phase</h2>
      <ul>{items.filter((item) => item.phase === "agenda").map(renderSo)}</ul>
    </StyledContainer>
  );
};

export default Page;
