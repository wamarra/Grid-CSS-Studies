import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2 / 3;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 44px 1fr;
  min-width: 716px;
`;

export const Header = styled.header`
  grid-row: 1 / 2;
  background-color: #2C2F48;
  `;

export const Main = styled.main`
  grid-row: 2 / 3;
  background-color: #1D203E;
`;
