import styled from "styled-components";
import { Container } from "@/components/Container";
import Link from "next/link";
import StarredList from "@/components/StarredList";
import { sortBy } from "@/util/sortBy";
import agendas from "@/data/agenda.json";
import { ListContainer, ListItem } from "@/components/ListItem";

const items = sortBy(
  agendas.filter((item) => !item.removedInPok),
  "name"
);

const Page = () => {
  const rendaAgenda = (item: (typeof items)[number]) => {
    let body = "";
    if (item.elect) body += `Elect: ${item.elect}`;
    body += "\n";
    body += item.effect;
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
