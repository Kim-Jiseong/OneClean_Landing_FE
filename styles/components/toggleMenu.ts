import styled, { css, keyframes } from "styled-components";
import * as M from "styles/animations";
import { THEME } from "styles/theme";
export const SubMenuTitle = styled.div<{ subMenu: string }>`
  /* background-color: ${THEME.LIGHT_BLUE}; */
  color: ${THEME.BLUE};
  font-weight: 700;
  cursor: pointer;
  display: flex;
  & div {
    transition: 0.3s all;
  }

  ${(props) =>
    props.id === props.subMenu &&
    css`
      & > div {
        transform: rotate(90deg);
        color: #222;
      }
    `}
`;
export const SubMenuContainer = styled.div<{ subMenu: any }>`
  width: 100%;
`;
export const SubMenu = styled.div`
  & img {
    width: 100%;
  }
  & span {
    font-size: 2rem;
  }
  & p {
    line-height: 140%;
    font-size: 1.6rem;
  }
`;
