import styled, { css, keyframes } from "styled-components";
import iconAdd from "../../assets/icon-add.png";
import iconCristal from "../../assets/icon-crystal.png";
import iconDualCrystal from "../../assets/icon-dual-crystal.png";
import iconExplore from "../../assets/icon-explore.png";
import iconMeal from "../../assets/icon-meal.png";
import logo from "../../assets/Logo.svg";
import sideBar from "../../assets/side-bar.svg";

export const slideIn = keyframes`
  from {
    transform: translateX(0%);
    opacity: 0;
  }
  to {
    transform: translateX(1%);
    opacity: 0.2;
  }
`;

export const fadeIn = keyframes`
  from {
    scale: 0;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  }
`;

export const Container = styled.div`
  grid-column: 1 / 2;

  display: grid;
  grid-template-columns: 76px 1fr;
  grid-template-rows: 44px 1fr 156px;
`;

export const Header = styled.header`
  grid-row: 1 / 2;
  grid-column: 2 / 3;

  background-color: #645492;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
  font-weight: 700;
  display: grid;
  padding: 8px 16px;
`;

export const Aside = styled.aside`
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  display: grid;
  justify-content: center;
  background-color: #715bac;
  position: relative;
`;

export const Main = styled.main`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  background-color: #645492;
`;

export const Footer = styled.footer`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  background-color: #1d203e;

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 14px;
  background: url(${logo}) no-repeat;
`;

export const SideBar = styled.div`
  background: url(${sideBar}) no-repeat;
  position: absolute;
  width: 87px;
  height: 100%;
  top: 0;
  left: 8px;
`;

export const SideBarIcon = styled.button<{ selected: boolean }>`
  appearance: none;
  border: unset;
  border-radius: 50%;
  background-size: cover;
  position: absolute;
  width: 40px;
  height: 40px;
  left: 16px;

  ${({ selected }) =>
    selected &&
    css`
      ::before {
        content: "";
        height: 35px;
        width: 5px;
        border-radius: 50%;
        display: block;
        position: relative;
        left: -36px;
        top: -9px;
        background: linear-gradient(
          180deg,
          rgba(196, 65, 244, 1),
          rgba(0, 218, 234, 1)
        );

        animation: 0.15s ease-in ${fadeIn} forwards;
      }

      ::after {
        content: "";
        cursor: pointer;
        filter: blur(10px);
        width: 40px;
        height: 40px;
        position: absolute;
        inset: -10px;
        border-radius: 50px;
        padding: 10px;
        -webkit-mask-image: radial-gradient(circle, transparent 50%, black 41%);
        background: linear-gradient(
          180deg,
          rgb(196, 65, 244),
          rgb(0, 218, 234)
        );

        animation: 0.3s ease-in ${slideIn} forwards;
      }
    `};

  :focus,
  :focus-visible {
    outline: none;
  }
`;

export const IconCrystal = styled(SideBarIcon)`
  background-image: url(${iconCristal});
  top: 117px;
`;

export const IconMeal = styled(SideBarIcon)`
  background-image: url(${iconMeal});
  top: 187px;
`;

export const IconDualCrystal = styled(SideBarIcon)`
  background-image: url(${iconDualCrystal});
  top: 257px;
`;

export const IconExplore = styled(SideBarIcon)`
  background-image: linear-gradient(
      rgba(113, 91, 172, 0.5),
      rgba(113, 91, 172, 0.5)
    ),
    url(${iconExplore});
  top: 327px;
`;

export const IconAdd = styled(SideBarIcon)`
  background-image: linear-gradient(
      rgba(113, 91, 172, 0.5),
      rgba(113, 91, 172, 0.5)
    ),
    url(${iconAdd});
  top: 397px;
`;

// position: relative;
// width: #{100%/$tab-count};
// transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
// .indicator {
//   position: relative;
//   width: $indicator-width;
//   max-width: 100%;
//   margin: 0 auto;
//   height: $indicator-height;
//   background: $accent;
//   border-radius: 1px;
