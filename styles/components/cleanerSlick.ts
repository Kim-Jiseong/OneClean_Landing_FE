import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";
export const MainContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
`;
export const ElementWrapper = styled.div`
  width: 40%;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-right: 2rem;
  box-shadow: 0 0 0 10px ${THEME.BLUE} inset;
  /* border: 10px solid ${THEME.BLUE}; */
  &:after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
`;
export const ElementInfo = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: 10%; */
  & div {
    color: ${THEME.BLUE};
    font-size: 3.2rem;
    font-weight: 700;
  }
  & span {
  }
  & li {
    & i {
      color: ${THEME.BLUE};
      padding: 0;
      margin: 0;
      margin-right: 1rem;
    }
    list-style: none;
    font-weight: 600;
  }
  & p {
    background-color: #f3f3f3;
    border-radius: 10px;
    margin-top: 2rem;
    width: calc(100% - 4rem);
    padding: 2rem;
    font-weight: 500;
  }
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;
