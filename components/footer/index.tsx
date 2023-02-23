import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "styles/components/footer";
function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 820 });
  return (
    <>
      <S.Container isMobile={isMobile}>
        <h3>
          <b>One</b>Clean
        </h3>
        <p>
          주식회사 NYSE | 대표 : 이예원 <br />
          서울시 성북구 안암로 145 고려대학교 경영본관 2층 스타트업 스테이션
          <br /> © NYSE Corp - All rights reserved
        </p>
      </S.Container>
    </>
  );
}

export default Footer;
