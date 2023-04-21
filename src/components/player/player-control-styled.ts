import styled, { css } from "styled-components";
import polygon from "../../assets/polygon.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 320px;
  height: 72px;
  left: 0px;
  top: 772px;
  background: #1d203e;
  box-shadow: inset -1px 0px 0px rgba(255, 255, 255, 0.1);
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Username = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;

export const Content = styled.ul`
  padding: 0;
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Icon = styled.li<{
  url: string;
  size: string;
  isActive: boolean;
}>`
  list-style: none;
  text-align: center;
  position: relative;
  background: url(${({ url }) => url}) no-repeat;

  ${({ size }) =>
    css`
      width: ${size};
      height: ${size};
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      ::after {
        content: "";
        width: 32px;
        height: 32px;
        top: 8px;
        left: 9px;
        transform: translate(-50%, -50%);
        background: url(${polygon}) no-repeat;
        position: absolute;

        &:last-child {
          left: 7px;
        }
      }
    `}
`;
