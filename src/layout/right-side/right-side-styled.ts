import styled from "styled-components";

export const Container = styled.div`
  grid-column: 3 / 4;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 44px 1fr;
`;

export const Header = styled.header`
  grid-row: 1 / 2;
  background-color: #2c2f48;
`;

export const Main = styled.main`
  background-color: #2c2f48;
`;
