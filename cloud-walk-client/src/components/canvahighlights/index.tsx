import * as S from "./../CanvaCard/style";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
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
        spaceBetween={-30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {mockedCanva.map((canva) => (
          <SwiperSlide className="CanvaSlide">
            <img className="CanvaImg" src={canva.image} alt={``} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CanvaHighLights;
