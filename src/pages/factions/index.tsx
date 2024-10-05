import React from "react";
import { factionItems } from "@/lib/factions";
import { Container } from "@/components/Container";
import styled from "styled-components";
import Link from "next/link";
import { sortBy } from "@/util/sortBy";
import { useStickyState } from "@/hooks/useStickyState";

const StyledContainer = styled(Container)`
  ul {
    padding-left: 1rem;
  }
  li {
    margin-bottom: 0.5em;
    list-style-type: none;
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    font-size: 1.1em;

    img {
      cursor: pointer;
    }
  }
`;
const items = sortBy(
  factionItems.map((item) => {
    const url = `/factions/${item.id}`;
    return { ...item, url };
  }),
  "displayName"
);

type ItemWithCurrent = (typeof items)[number] & { isCurrent: boolean };

const Item = (props: { item: ItemWithCurrent; onClick: () => void }) => {
  const { item, onClick } = props;
  return (
    <li>
      <span onClick={onClick}>
        <img src={`/star_icon_${item.isCurrent ? "" : "un"}filled.svg`}></img>
      </span>
      <Link href={item.url}>{item.displayName}</Link>
    </li>
  );
};

const Page = () => {
  const [current, setCurrent] = useStickyState(
    [] as string[],
    "current-factions"
  );

  console.log({ current });

  const itemsWithCurrent = items.map((item) => {
    return { ...item, isCurrent: current.includes(item.id) };
  });

  const getOnClick = (item: ItemWithCurrent) => () => {
    setCurrent((current) => {
      const index = current.findIndex((id) => id === item.id);
      if (index === -1) {
        return [...current, item.id];
      } else {
        return [...current.slice(0, index), ...current.slice(index + 1)];
      }
    });
  };

  const currentItemsOnly = itemsWithCurrent.filter((item) => item.isCurrent);

  return (
    <StyledContainer>
      <div>
        <Link href="/">{"<"} All info</Link>
      </div>
      <h1>Factions</h1>
      <h3>Current game</h3>
      <ul>
        {currentItemsOnly.length ? (
          currentItemsOnly.map((item) => {
            return (
              <Item item={item} onClick={getOnClick(item)} key={item.id} />
            );
          })
        ) : (
          <li>
            <i>No factions selected! Use the stars to select.</i>
          </li>
        )}
      </ul>
      <h3>All</h3>
      <ul>
        {itemsWithCurrent.map((item) => {
          return <Item item={item} onClick={getOnClick(item)} key={item.id} />;
        })}
      </ul>
    </StyledContainer>
  );
};

export default Page;
