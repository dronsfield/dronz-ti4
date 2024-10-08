import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { useStickyState } from "@/hooks/useStickyState";
import { Container } from "@/components/Container";
import styled from "styled-components";

const StyledDiv = styled.div`
  ul {
    padding-left: 1rem;
  }
  li {
    margin-bottom: 0.5em;
    list-style-type: none;
    min-height: 24px;
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

type StarredListProps<T extends { id: string }> = {
  storageKey: string;
  items: T[];
  starredTitle: string;
  allTitle: string;
  placeholder: string;
  renderItem: (item: T, starred: boolean) => React.ReactNode;
};

function StarredList<T extends { id: string }>(
  props: PropsWithChildren<StarredListProps<T>>
) {
  const { storageKey, items, starredTitle, allTitle, placeholder, renderItem } =
    props;
  const [current, setCurrent] = useStickyState([] as string[], storageKey);

  type ItemWithCurrent = T & { isCurrent: boolean };

  const itemsWithCurrent = items.map((item) => {
    return { ...item, isCurrent: current.includes(item.id) };
  });

  const currentItemsOnly = itemsWithCurrent.filter((item) => item.isCurrent);

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

  const renderLi = (item: ItemWithCurrent, starred: boolean) => {
    return (
      <li key={item.id}>
        <span onClick={getOnClick(item)}>
          <img src={`/star_icon_${item.isCurrent ? "" : "un"}filled.svg`}></img>
        </span>
        {renderItem(item, starred)}
      </li>
    );
  };

  return (
    <StyledDiv>
      <h3>{starredTitle}</h3>
      <ul>
        {currentItemsOnly.length ? (
          currentItemsOnly.map((item) => {
            return renderLi(item, true);
          })
        ) : (
          <li>
            <i>{props.placeholder}</i>
          </li>
        )}
      </ul>
      <h3>{allTitle}</h3>
      <ul>
        {itemsWithCurrent.map((item) => {
          return renderLi(item, false);
        })}
      </ul>
    </StyledDiv>
  );
}

export default StarredList;
