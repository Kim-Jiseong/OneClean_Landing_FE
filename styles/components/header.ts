import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";
export const Container = styled.div<{ scroll: boolean; isMobile: boolean }>`
  width: 100%;
  padding: ${(props) => (props.isMobile ? "3rem 6%" : "3rem 10%")};
  position: fixed;
  top: 0;
  left: 0;
  font-family: "Cafe24Ssurround";
  font-weight: 700;
  font-size: 2.4rem;

  z-index: 5;
  color: white;
  transition: 0.5s;
  ${(props) =>
    props.scroll &&
    css`
      color: #222;
      background-color: rgba(255, 255, 255, 1);
      border-bottom: 1px solid #eee;
      & b {
      }
    `}
  & b {
    color: ${THEME.BLUE};
  }
`;
