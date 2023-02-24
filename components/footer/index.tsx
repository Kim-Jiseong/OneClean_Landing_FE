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
          버틀봇 | 사업자등록번호: 882-02-02063 <br />
          서울시 성북구 안암로 145 고려대학교 경영본관 2층 스타트업 스테이션
          <br />
        </p>
      </S.Container>
    </>
  );
}

export default Footer;
