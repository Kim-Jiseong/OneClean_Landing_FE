import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";
export const MainContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
`;
export const ElementWrapper = styled.div`
  width: 100%;
  /* min-height: 200px; */
  height: auto;
  & > h2 {
    margin-top: 2rem;
    white-space: pre-wrap;
    font-size: 2.4rem;
    color: ${THEME.BLUE};
    font-weight: 900;
  }
  & > p {
    color: #cacaca;
    text-align: right;
    margin-top: 2rem;
    font-weight: 700;
    font-size: 1.6rem;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  /* display: flex !important; */
  /* flex-wrap: nowrap; */
  /* overflow-x: scroll !important; */
`;
export const ImageWrapper = styled.div<{ isMobile: boolean }>`
  max-width: ${(props) => (props.isMobile ? "100%" : "40%")};
  flex: 0 0 auto;
  width: 100%;
  position: relative;
  /* background-color: grey; */
  &::after {
    content: "";
    display: block;
    padding-bottom: 170%;
    /* background-color: grey; */
  }
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: contain;
  }
`;
