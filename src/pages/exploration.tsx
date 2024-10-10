import { Container } from "@/components/Container";
import Link from "next/link";
import { sortBy } from "@/util/sortBy";
import allExploreCards from "@/data/explore.json";
import { ListContainer, ListItem } from "@/components/ListItem";

const items = sortBy(allExploreCards, ["quantity", "effect"]);

const Page = () => {
  const renderCard = (item: (typeof items)[number]) => {
    return (
      <li>
        <ListItem
          title={`${item.name} (x${item.quantity})`}
          body={item.effect}
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
      <h1>Exploration cards</h1>
      <h2>Hazardous</h2>
      <ListContainer>
        {items.filter((item) => item.cardType === "hazardous").map(renderCard)}
      </ListContainer>
      <h2>Industrial</h2>
      <ListContainer>
        {items.filter((item) => item.cardType === "industrial").map(renderCard)}
      </ListContainer>
      <h2>Cultural</h2>
      <ListContainer>
        {items.filter((item) => item.cardType === "cultural").map(renderCard)}
      </ListContainer>
      <h2>Frontier</h2>
      <ListContainer>
        {items.filter((item) => item.cardType === "frontier").map(renderCard)}
      </ListContainer>
    </Container>
  );
};

export default Page;
