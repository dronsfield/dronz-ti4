import React from "react";
import { factionItems } from "@/lib/factions";
import { Container } from "@/components/Container";
import styled from "styled-components";
import Link from "next/link";
import { sortBy } from "@/util/sortBy";
import { useStickyState } from "@/hooks/useStickyState";
import StarredList from "@/components/StarredList";

import allObjectives from "@/data/obj/obj.json";
import { ListItem } from "@/components/ListItem";

const items = sortBy(
  allObjectives.filter((obj) => obj.objType === "po"),
  ["value", "name"]
);

const Page = () => {
  return (
    <Container>
      <div>
        <Link href="/">{"<"} All info</Link>
      </div>
      <h1>Public Objectives</h1>

      <StarredList
        starredTitle="Current game"
        allTitle="All"
        placeholder="No objectives selected! Use the stars to select."
        items={items}
        storageKey="current-po"
        renderItem={(item) => {
          return (
            <ListItem
              title={item.name}
              body={item.condition}
              style={{
                color: item.value === "1" ? "#D16F36" : "#2F5583",
                padding: "0.25em 1em 0.25em 0.25em",
              }}
            />
          );
        }}
      />
    </Container>
  );
};

export default Page;
