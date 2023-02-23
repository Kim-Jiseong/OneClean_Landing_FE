import { useEffect, useRef } from "react";
import * as S from "styles/components/cleanerSlick";
import Slider from "react-slick";
import { Cleaners } from "constants/cleaners";
function Slick() {
  const CleanerList = Cleaners;
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <S.MainContainer>
      <Slider {...settings}>
        {CleanerList.map(
          ({ id, name, star, action, location, memo, message }) => (
            <S.ElementWrapper>
              <S.ContentWrapper>
                <S.ElementInfo>
                  <div>{name}</div>
                  <span>평균 평점 {star}/5.0점</span>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    {action}
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    {location}
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    {memo}
                  </li>
                  <p>{message}</p>
                </S.ElementInfo>
              </S.ContentWrapper>
            </S.ElementWrapper>
          )
        )}
      </Slider>
    </S.MainContainer>
  );
}

export default Slick;
