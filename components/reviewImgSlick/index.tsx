import { useEffect, useRef, useState } from "react";
import * as S from "styles/components/reviewSlick";
import Slider from "react-slick";
import { Reviews } from "constants/reviews";
import { useMediaQuery } from "react-responsive";
function Slick() {
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const ReviewList = Reviews;
  const [imgList, setImgList] = useState();
  const settings = {
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    initialSlide: 0,
    pauseOnHover: false,
  };
  useEffect(() => {
    console.log(imgList);
  }, [imgList]);
  return (
    <S.MainContainer>
      <Slider {...settings}>
        {ReviewList.map(({ id, star, title, message, img }) => (
          <S.ElementWrapper>
            {[...Array(star)].map((i) => (
              <span key={i}>⭐</span>
            ))}
            <h2>{title}</h2>
            <p>{message}</p>
            <S.ImageContainer key={id}>
              {img.map((src) => (
                <S.ImageWrapper isMobile={isMobile}>
                  <img src={src.src} />
                </S.ImageWrapper>
              ))}
            </S.ImageContainer>
          </S.ElementWrapper>
        ))}
      </Slider>
    </S.MainContainer>
  );
}

export default Slick;
