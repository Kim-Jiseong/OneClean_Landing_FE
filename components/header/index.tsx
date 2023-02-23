import React, { useState, useEffect } from "react";
import * as S from "styles/components/header";
import { useMediaQuery } from "react-responsive";
function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fullscreen, setFullscreen] = useState<number>();
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  const isMobile = useMediaQuery({ maxWidth: 820 });

  useEffect(() => {
    setFullscreen(window.innerHeight);
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <>
      {fullscreen && (
        <S.Container
          isMobile={isMobile}
          scroll={scrollPosition > fullscreen ? true : false}
        >
          <b>One</b>Clean
        </S.Container>
      )}
    </>
  );
}

export default Header;
