import styled from "styled-components";
import { Container } from "@/components/Container";
import Link from "next/link";
import StarredList from "@/components/StarredList";
import { sortBy } from "@/util/sortBy";
import allObjectives from "@/data/obj/obj.json";
import { ListContainer, ListItem } from "@/components/ListItem";

const items = sortBy(
  allObjectives.filter((obj) => obj.objType === "so"),
  "name"
);

const Page = () => {
  const renderSo = (item: (typeof items)[number]) => {
    return (
      <li>
        <ListItem title={item.name} body={item.condition} key={item.id} />
      </li>
    );
  };
  return (
    <Container>
      <div>
        <Link href="/">{"<"} All info</Link>
      </div>
      <h1>Secret Objectives</h1>
      <h2>Action phase</h2>
      <ListContainer>
        {items.filter((item) => item.phase === "action").map(renderSo)}
      </ListContainer>
      <h2>Status phase</h2>
      <ListContainer>
        {items.filter((item) => item.phase === "status").map(renderSo)}
      </ListContainer>
      <h2>Agenda phase</h2>
      <ListContainer>
        {items.filter((item) => item.phase === "agenda").map(renderSo)}
      </ListContainer>
    </Container>
  );
};

export default Page;
