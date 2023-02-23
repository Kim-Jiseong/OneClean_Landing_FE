import styled, { css, keyframes } from "styled-components";
export const tone = keyframes`
0%{
    background-color: rgba(0, 0, 0, 0);
}
100%{
    background-color: rgba(0, 0, 0, 0.4);
}
`;

export const fadein = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;
export const swipeUp = keyframes`
0%{
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
}
100%{
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
}
`;
