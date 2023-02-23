import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";
export const Container = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? "88%" : "80%")};
  min-height: 200px;
  padding: ${(props) => (props.isMobile ? "3rem 6%" : "3rem 10%")};
  font-family: "Cafe24Ssurround";
  font-weight: 700;
  font-size: 2.4rem;
  background-color: ${THEME.LIGHT_BLUE};
  & b {
    color: ${THEME.BLUE};
  }
  & > h3 {
    margin-bottom: 1rem;
  }
  & p {
    font-size: 1.4rem;
  }
`;
