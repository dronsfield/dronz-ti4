import styled from "styled-components";
import { Container } from "@/components/Container";
import Link from "next/link";
import StarredList from "@/components/StarredList";
import { sortBy } from "@/util/sortBy";
import agendas from "@/data/agenda.json";
import { ListContainer, ListItem } from "@/components/ListItem";
import { useItemFilterSearchBar } from "@/components/Search";
import SearchBar from "@/components/Search";

const allItems = sortBy(
  agendas.filter((item) => !item.removedInPok),
  "name"
);

const Page = () => {
  const { items, searchBarProps } = useItemFilterSearchBar(allItems, [
    "name",
    "effect",
    "elect",
  ]);

  const rendaAgenda = (item: (typeof items)[number]) => {
    return (
      <li>
        <ListItem
          title={item.name}
          body={
            <>
              {item.elect ? (
                <div
                  style={{ whiteSpace: "normal" }}
                >{`Elect: ${item.elect}`}</div>
              ) : null}
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
      <h1>Agendas</h1>
      <div>
        <SearchBar {...searchBarProps} />
      </div>
      <h2>Laws (permanent changes)</h2>
      <ListContainer>
        {items.filter((item) => item.agendaType === "law").map(rendaAgenda)}
      </ListContainer>
      <h2>Directives (one-time effects)</h2>
      <ListContainer>
        {items
          .filter((item) => item.agendaType === "directive")
          .map(rendaAgenda)}
      </ListContainer>
    </Container>
  );
};

export default Page;
