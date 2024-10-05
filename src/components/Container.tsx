import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  padding-block-end: 1rem;

  @media (min-width: 800px) {
    margin: 1rem auto;
    padding: 1rem;
    max-width: 800px;
  }
`;
