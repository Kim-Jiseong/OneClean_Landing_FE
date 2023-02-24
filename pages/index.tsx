import React, { useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import * as S from "styles/main";
import Main1 from "public/assets/bathroom1.jpg";
import { useMediaQuery } from "react-responsive";
import CleanerSlick from "components/cleanerSlick/index";
import ReviewSlick from "components/reviewSlick/index";
import ReviewImgSlick from "components/reviewImgSlick/index";
import { AnimatePresence, motion } from "framer-motion";
import ToggleMenu from "components/toggleMenu/index";
import kit from "public/assets/SubMenu/kit.png";
import cleaner from "public/assets/SubMenu/cleaner.png";
import pay from "public/assets/SubMenu/pay.png";

const inter = Inter({ subsets: ["latin"] });
const content = [
  {
    title: "“친환경세제? 락스 쓰면 되지 않나요?”",
    text: "락스는 특유의 냄새 자체만으로 꺼려하시는 고객님들이 많습니다. 따라서 꼭 필요한 상황이 아니라면 사용을 지양하고 있습니다. 또 피부가 예민한 고객님들을 위해서라도 홈스루 팀은 인체에 무해하면서도 세정력이 좋은 세제를 찾아다녔습니다. 여러 제품들을 사용, 비교해본 결과 무해하면서도 가장 효과가 좋은 친환경세제를 엄선했습니다.",
  },
  {
    title: "“변기솔, 바닥솔, 수세미? 왜 이렇게 많이 필요하죠?”",
    text: "두개의 솔과 수세미는 그 용도가 모두 다릅니다. 변기를 닦는데 사용한 솔로 바닥, 수도꼭지를 닦는 것은 청소를 하는 의미가 없을 정도로 매우 비위생적입니다. 홈스루 팀은 이를 미연에 방지하고자 두개의 솔과 수세미를 키트에 포함시키고 철저하게 용도를 구분하여 위생적인 청소를 지향하고 있습니다.",
  },
  {
    title: "“곰팡이제거제, 물밀대, 유리물때제거제는 왜 별도로 안 파시나요?”",
    text: "원클린은 1인 가구를 위한 서비스입니다. 따라서 합리적인 가격을 유지하는 것을 높은 우선순위로 두고 있으며, 가장 필요한 도구들만 판매할 것을 원칙으로 합니다. 화장실 상태에 따라 필요없을지도 모르는 도구들까지 묶어서 판매하는 것은 비용을 고객님들께 전가시키는 행위나 다름없습니다.",
  },
];

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isMobile != undefined) {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {!loading && (
        <>
          <S.LinkBtn
            href={
              isMobile
                ? "kakaoplus://plusfriend/home/390968634"
                : "http://pf.kakao.com/_YKxfxbxj"
            }
            target={
              isMobile
                ? "kakaoplus://plusfriend/home/390968634"
                : "http://pf.kakao.com/_YKxfxbxj"
            }
            rel="noreferrer"
          >
            바로 예약하기
          </S.LinkBtn>
          <S.MainBannerContainer>
            <S.MainBannerContentContainer>
              <S.MainBannerContentWrapper isMobile={isMobile}>
                <p>
                  합리적인 가격에 <br />
                  누리는 화장실 청소
                </p>
                <p>
                  3회권 구매시 회당 21,900원.
                  <br />
                  청소도구까지 한번에.
                </p>
              </S.MainBannerContentWrapper>
            </S.MainBannerContentContainer>
            <img src={Main1.src} />
          </S.MainBannerContainer>
          <S.Section1 isMobile={isMobile}>
            <S.GraphContainer data-aos="fade">
              <div style={{ top: "0" }}>
                60,000원 <span></span>
              </div>
              <div style={{ top: "30%" }}>
                40,000원 <span></span>
              </div>
              <div style={{ top: "60%" }}>
                20,000원 <span></span>
              </div>
              <div style={{ bottom: "10%" }}>
                <span></span>
              </div>
              <S.GraphContentWrapper>
                <div
                  data-aos="fade"
                  data-aos-offset="60"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-delay="100"
                  style={{ paddingBottom: "80%" }}
                ></div>
                <div
                  data-aos="fade"
                  data-aos-offset="60"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-delay="200"
                  style={{ paddingBottom: "90%" }}
                ></div>
                <div
                  data-aos="fade"
                  data-aos-offset="60"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-delay="300"
                  style={{ paddingBottom: "100%" }}
                ></div>
                <div
                  data-aos="fade"
                  data-aos-offset="60"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-delay="400"
                  style={{ paddingBottom: "110%" }}
                ></div>
                <div
                  data-aos="fade"
                  data-aos-offset="60"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-delay="800"
                  style={{ paddingBottom: "45%" }}
                ></div>
              </S.GraphContentWrapper>
              <S.GraphContent>
                <span data-aos="fade" data-aos-delay="100">
                  M사
                </span>
                <span data-aos="fade" data-aos-delay="200">
                  H사
                </span>
                <span data-aos="fade" data-aos-delay="300">
                  D사
                </span>
                <span data-aos="fade" data-aos-delay="400">
                  C사
                </span>
                <span data-aos="fade" data-aos-delay="500">
                  원클린
                </span>
              </S.GraphContent>
            </S.GraphContainer>
            <div>
              <p data-aos="fade">
                원클린은 <mark>"1인 가구를 위한 화장실 청소 서비스"</mark>를
                제공합니다. 1인가구가 가장 원하는 "화장실 청소"에만 집중하여
                가격을 획기적으로 낮췄습니다. 이제 화장실 청소는 <b>원클린</b>에
                맡기세요!
              </p>
            </div>
          </S.Section1>
          <S.Section2 isMobile={isMobile}>
            <div>
              <span data-aos="fade" data-aos-delay="100">
                안전하고 전문적인 클리너
              </span>
              <br />
              <p data-aos="fade" data-aos-delay="200">
                청소를 맡아주시는 클리너분들은 &nbsp;
                <mark>
                  모두 대학교에서 10년 이상 근무하셨거나, 대형 업체에서 100회
                  이상의 청소경험을 보유한 전문가분
                </mark>
                들입니다. 서비스 예약이 확정되면 고객님 댁에 방문할 클리너가
                어떤 분인지 미리 볼 수 있으니 안심하고 이용해보세요. 그리고
                &nbsp;<mark>클리너는 모두 여성분들이랍니다.</mark>
              </p>
            </div>
            <div data-aos="fade" data-aos-delay="300">
              <CleanerSlick></CleanerSlick>
            </div>
          </S.Section2>
          <S.Section3 isMobile={isMobile}>
            <h2 data-aos="fade">원클린의 청소 전략</h2>
            <ul>
              <li data-aos="fade" data-aos-delay="100">
                <span>1 /</span> 화장실을 다섯 구역(세면대, 변기, 하수구, 거울,
                바닥)으로 나눠 청소합니다.
              </li>
              <li data-aos="fade" data-aos-delay="200">
                <span>2 /</span> <b>곰팡이, 찌든때, 물때</b>도 제거해드립니다.
              </li>
              <li data-aos="fade" data-aos-delay="300">
                <span>3 /</span> 수납장 및 욕실 용품 정리정돈으로 마무리합니다.
              </li>
              <li data-aos="fade" data-aos-delay="400">
                <span>4 /</span> 청소가 완료되면 다섯 구역의 &nbsp;
                <b>Before & After</b>&nbsp; 사진을 보내드립니다.
              </li>
            </ul>
          </S.Section3>
          <S.Section4 isMobile={isMobile}>
            <h2 data-aos="fade">청소에 필요한 도구들 🧼</h2>
            <br />
            <p data-aos="fade" data-aos-delay="100">
              클리너들은&nbsp;
              <mark>고객님의 집에 구비되어 있는 청소도구를 사용합니다.</mark>
              &nbsp; 물론 전문적인 일부 도구들은 지참하지만요. &nbsp;
              <mark>
                집에 청소도구가 없다면 원클린이 마련한 청소키트를 구매해보세요.
              </mark>
            </p>
            <br />
            <br />
            <div data-aos="fade" data-aos-delay="200">
              <ToggleMenu
                id="kit"
                title="키트는 어떤 도구들로 구성되어 있나요?"
                url={kit.src}
              />
              <ToggleMenu
                id="cleaner"
                title="클리너는 어떤 도구들을 지참하나요?"
                url={cleaner.src}
              />
              <ToggleMenu id="FAQ" title="FAQ" content={content} />
            </div>
          </S.Section4>
          <S.Section3 isMobile={isMobile}>
            <h2 data-aos="fade">실제 고객 후기 🎤</h2>
            {/* <ReviewSlick /> */}
            <ReviewImgSlick />
          </S.Section3>
          <S.Section3 isMobile={isMobile}>
            <h2 data-aos="fade">서비스 이용 방법</h2>
            <ul>
              <li data-aos="fade" data-aos-delay="100">
                <span>1 /</span> 화면 하단의 <b>바로 예약하기</b> 버튼 클릭!
              </li>
              <li data-aos="fade" data-aos-delay="200">
                <span>2 /</span> 카카오톡 채널 내 [신청서 양식] 클릭 후 작성
              </li>
              <li data-aos="fade" data-aos-delay="300">
                <span>3 /</span> <b>"클리너 배정 완료"</b> 메시지 수령
              </li>
              <li data-aos="fade" data-aos-delay="400">
                <span>4 /</span> 서비스 사용료 입금
              </li>
              <li data-aos="fade" data-aos-delay="500">
                <span>5 /</span> <b>"서비스 예약 확정"</b> 메시지 수령
              </li>
            </ul>
          </S.Section3>
          <S.Section3 isMobile={isMobile}>
            <h2 data-aos="fade" data-aos-delay="100">
              요금제 안내
            </h2>
            {/* <ul>
              <li data-aos="fade" data-aos-delay="100">
                <span>
                  <i className="bi bi-check2"></i>
                </span>
                &nbsp;안전하고 전문적인 클리너들이 방문합니다.
              </li>
              <li data-aos="fade" data-aos-delay="300">
                <span>
                  <i className="bi bi-check2"></i>
                </span>
                &nbsp;이용권은 언제든지 변경 및 해지가 가능합니다.
              </li>
            </ul> */}
            <img data-aos="fade" data-aos-delay="300" src={pay.src} />
          </S.Section3>
          <S.YB></S.YB>
        </>
      )}
    </>
  );
}
