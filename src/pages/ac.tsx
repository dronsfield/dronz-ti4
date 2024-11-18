import styled from "styled-components";
import { Container } from "@/components/Container";
import Link from "next/link";
import StarredList from "@/components/StarredList";
import { sortBy } from "@/util/sortBy";
import actionCards from "@/data/ac.json";
import { ListContainer, ListItem } from "@/components/ListItem";
import SearchBar, {
  useItemFilterSearchBar,
  useSearchBar,
} from "@/components/Search";
import { useMemo } from "react";

const allItems = sortBy(actionCards, "name");

const Page = () => {
  const { items, searchBarProps } = useItemFilterSearchBar(allItems, [
    "name",
    "effect",
    "play",
  ]);

  const renderItem = (item: (typeof items)[number]) => {
    return (
      <li>
        <ListItem
          title={`${item.name} (x${item.quantity})`}
          body={
            <>
              <div>
                <i>{item.play}</i>
              </div>
              <div>{item.effect}</div>
            </>
          }
          key={item.id}
        />
      </li>
    );
  };
  return (
    <Container>
      <div>
        <Link href="/">{"<"} All info</Link>
      </div>
      <h1>Action Cards</h1>
      <div>
        <SearchBar {...searchBarProps} />
      </div>
      <ListContainer>{items.map(renderItem)}</ListContainer>
    </Container>
  );
};

export default Page;
