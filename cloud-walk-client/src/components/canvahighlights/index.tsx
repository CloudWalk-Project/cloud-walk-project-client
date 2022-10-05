import * as S from "./../CanvaCard/style";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import TheDepths from "./../../assets/imgs/TheDepths.jpg";
import DemonGod from "./../../assets/imgs/DemonGod.jpg";
import Joy from "./../../assets/imgs/Joy.jpg";
import LoneWolf from "./../../assets/imgs/LoneWolf.jpg";
import FeverDream from "./../../assets/imgs/FeverDream.jpg";
import Striker from "./../../assets/imgs/Striker.jpg";
import NewEra from "./../../assets/imgs/NewEra.jpg";
import TheWoods from "./../../assets/imgs/TheWoods.jpg";
import Undefeated from "./../../assets/imgs/Undefeated.jpg";
import { mockedCanva } from "../../mocks/canva";

const CanvaHighLights = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        speed={800}
        slidesPerView={3}
        className="Carousel"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {mockedCanva.map((canva) => (
          <SwiperSlide className="CanvaSlide">
            <img className="CanvaImg" src={canva.image} alt={``} />
            <S.CardInfoContainer className="SlideInfo">
              <S.CardInfoNameCategory>
                <S.CardInfoCategory className="SlideCategory">
                  {canva.categoryName}
                </S.CardInfoCategory>
                <S.CardInfoName className="SlideName">
                  {canva.name}
                </S.CardInfoName>
              </S.CardInfoNameCategory>
              <S.CardInfoPriceContainer>
                <S.CardInfoPrice className="SlidePrice">
                  R${canva.price}
                </S.CardInfoPrice>
              </S.CardInfoPriceContainer>
            </S.CardInfoContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CanvaHighLights;
