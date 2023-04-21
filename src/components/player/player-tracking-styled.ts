import styled from "styled-components";
import tracking from "../../assets/tracking.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 90px;
  left: 0px;
  top: 0px;
  background-color: rgba(77, 73, 115, 0.5);
`;

export const TrackingImage = styled.div`
  width: 248px;
  height: 36px;
  background-image: url(${tracking});

  filter: drop-shadow(12px 0 12px rgba(196, 65, 244, 1))
    drop-shadow(-12px 0 12px rgba(0, 218, 234, 1));
  -webkit-filter: drop-shadow(
    12px 0 12px rgba(196, 65, 244, 1)
      drop-shadow(-12px 0 12px rgba(0, 218, 234, 1))
  );
`;
