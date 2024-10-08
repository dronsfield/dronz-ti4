import { Container } from "@/components/Container";
import Link from "next/link";
import { sortBy } from "@/util/sortBy";
import allExploreCards from "@/data/explore.json";
import { ListContainer, ListItem } from "@/components/ListItem";

const items = sortBy(
  allExploreCards.filter((item) => item.cardType === "relic"),
  "name"
);

const Page = () => {
  const renderCard = (item: (typeof items)[number]) => {
    return (
      <li>
        <ListItem title={item.name} body={item.effect} key={item.id} />
      </li>
    );
  };
  return (
    <Container>
      <div>
        <Link href="/">{"<"} All info</Link>
      </div>
      <h1>Relics</h1>
      <ListContainer>{items.map(renderCard)}</ListContainer>
    </Container>
  );
};

export default Page;
