import styled, { css } from "styled-components";

export const Container = styled.li<{ selected: boolean }>`
  cursor: pointer;
  list-style-type: none;
  display: flex;
  align-items: center;
  padding-left: 8px;
  gap: 8px;
  width: 100%;
  height: 40px;
  background-blend-mode: overlay;
  border-radius: 5px;

  ${({ selected }) =>
    selected
      ? css`
          background: rgba(0, 0, 0, 0.5);
          :not(:hover):active,
          :not(:hover):focus {
            background: rgba(0, 0, 0, 0.2);
          }
        `
      : css`
          :hover {
            background: rgba(0, 0, 0, 0.2);
          }
        `};

  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const Icon = styled.i<{ url: string }>`
  width: 24px;
  height: 24px;
  background-image: url(${({ url }) => url});
`;

export const MenuItemLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.36px;
  color: #ffffff;
`;
