import styled from "styled-components";
import { Container } from "@/components/Container";
import Link from "next/link";
import StarredList from "@/components/StarredList";
import { sortBy } from "@/util/sortBy";
import actionCards from "@/data/ac.json";
import { ListContainer, ListItem } from "@/components/ListItem";

const items = sortBy(actionCards, "name");

const Page = () => {
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
      <ListContainer>{items.map(renderItem)}</ListContainer>
    </Container>
  );
};

export default Page;
