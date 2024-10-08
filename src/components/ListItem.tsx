import React from "react";
import styled from "styled-components";

export const ListContainer = styled.ul`
  padding-left: 1.25em;
  li {
    margin-bottom: 0.5em;
  }
`;

export function ListItem(props: { title: string; body: string } & any) {
  const { title, body, ...rest } = props;
  return (
    <div
      style={{
        padding: "0.25em 1em 0.25em 0.25em",
        ...rest.style,
      }}
      {...rest}
    >
      <div>
        <strong>{title}</strong>
      </div>
      <div style={{ opacity: 0.67, marginBlockStart: "0.25em" }}>{body}</div>
    </div>
  );
}
