import styled, { css, keyframes } from "styled-components";
import * as M from "./animations";
import { THEME } from "./theme";
export const MainBannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const MainBannerContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  top: 0;
  left: 0;
  animation: ${M.tone} 1s 1s forwards;
`;
export const MainBannerContentWrapper = styled.div<{ isMobile: boolean }>`
  font-size: 4.5rem;
  font-weight: 700;
  color: white;
  padding: ${(props) => (props.isMobile ? "3rem 6%" : "3rem 10%")};
  text-align: right;
  line-height: 140%;
  opacity: 0;
  animation: ${M.fadein} 1s 1.5s forwards;
  & p:last-child {
    margin-top: 2rem;
    font-size: 2.4rem;
    line-height: 140%;
    font-weight: 400;
    opacity: 0;
    animation: ${M.fadein} 1s 2s forwards;
  }
`;
export const Section1 = styled.section<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? "88%" : "80%")};
  height: auto;
  padding: 10rem 0% 4rem 0%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  line-height: 150%;
  & mark {
    background-color: ${THEME.LIGHT_BLUE};
    font-weight: 700;
  }
  & div {
    width: 45%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & div {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    `}
`;
export const GraphContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 4rem;
  & > div {
    position: absolute;
    font-weight: 700;
    color: ${THEME.BLUE};
    width: 100%;
    display: flex;
    font-size: 1.2rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transform: translate(0, -50%);
    & span {
      width: 100%;
      margin-left: 1rem;
      height: 1px;
      background-color: ${THEME.BLUE};
    }
  }
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
export const GraphContentWrapper = styled.section`
  width: 80%;
  position: absolute;
  right: 0;
  bottom: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* ${(props) =>
    props.className?.includes("aos-animate") &&
    css`
      background-color: red;
    `} */
  & div {
    width: 40px;
    padding-bottom: 100%;
    background-color: #cacaca;
    /* clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); */

    /* animation: ${M.swipeUp} 1s 3s forwards; */
    &:last-child {
      background-color: ${THEME.BLUE};
    }
  }
`;
export const GraphContent = styled.section`
  width: 80%;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & span {
    text-align: center;
    font-size: 1.2rem;
    overflow: hidden;
    font-weight: 700;
    width: 40px;
    &:last-child {
      color: ${THEME.BLUE};
    }
  }
  /* padding: 0 5%; */
`;
export const LinkBtn = styled.a`
  position: fixed;
  bottom: 24px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 88%;
  height: 48px;
  color: white;
  background-color: ${THEME.BLUE};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease 0s;
  box-shadow: rgb(55 53 47 / 40%) 0px 0px 4px 2px;
  animation: ${M.fadein} 0.8s forwards;
  z-index: 10;
  &:hover {
    background-color: ${THEME.LIGHT_BLUE};
    color: ${THEME.BLUE};
  }
`;
export const Section2 = styled.section<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? "88%" : "80%")};
  height: auto;
  padding: 4rem 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  line-height: 150%;
  /* min-height: 100vh; */
  & mark {
    background-color: ${THEME.LIGHT_BLUE};
    font-weight: 700;
  }
  & > div {
    width: 45%;
    position: relative;
  }
  & > div > span {
    font-weight: 700;
    font-size: 3.2rem;
  }
  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > div {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    `}
`;
export const Section3 = styled.section<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? "88%" : "80%")};
  padding: 4rem 0;
  margin: 0 auto;
  /* font-weight: 600; */
  font-size: 2rem;
  line-height: 160%;
  & h2 {
    font-weight: 700;
    font-size: 3.2rem;
  }
  & li {
    list-style: none;
    margin-top: 2rem;
  }
  & span {
    font-weight: 700;
    font-size: 2.8rem;
    color: ${THEME.BLUE};
  }
  & mark {
    background-color: ${THEME.LIGHT_BLUE};
    font-weight: 700;
  }
  & > img {
    max-width: 800px;
    width: 40%;
  }
  ${(props) =>
    props.isMobile &&
    css`
      & > img {
        width: 100%;
      }
    `}
`;
export const Section4 = styled(Section3)`
  font-size: 1.8rem;
`;

export const YB = styled.div`
  width: 100%;
  height: 100px;
`;
