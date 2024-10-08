import React from "react";
import { factionItems } from "@/lib/factions";
import { Container } from "@/components/Container";
import Link from "next/link";
import { sortBy } from "@/util/sortBy";
import StarredList from "@/components/StarredList";

const items = sortBy(
  factionItems.map((item) => {
    const url = `/factions/${item.id}`;
    return { ...item, url };
  }),
  "displayName"
);

const Page = () => {
  return (
    <Container>
      <div>
        <Link href="/">{"<"} All info</Link>
      </div>
      <h1>Factions</h1>

      <StarredList
        starredTitle="Current game"
        allTitle="All"
        placeholder="No factions selected! Use the stars to select."
        items={items}
        storageKey="current-factions"
        renderItem={(item) => {
          return <Link href={item.url}>{item.displayName}</Link>;
        }}
      />
    </Container>
  );
};

export default Page;
