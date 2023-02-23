import { useEffect, useRef, useState } from "react";
import * as S from "styles/components/reviewSlick";
import Slider from "react-slick";
import { Reviews } from "constants/reviews";
function Slick() {
  const ReviewList = Reviews;
  const [imgList, setImgList] = useState();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    initialSlide: 0,
    pauseOnHover: true,
  };
  useEffect(() => {
    console.log(imgList);
  }, [imgList]);
  return (
    <S.MainContainer>
      <Slider {...settings}>
        {ReviewList.map(({ id, star, title, message, img }) => (
          <S.ElementWrapper key={id}>
            <h2>{title}</h2>
          </S.ElementWrapper>
        ))}
      </Slider>
    </S.MainContainer>
  );
}

export default Slick;
