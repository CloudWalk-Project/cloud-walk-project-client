import * as S from "./style";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { Navigation, Autoplay,} from 'swiper'
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import TheDepths from "./../../assets/imgs/TheDepths.jpg";
import DemonGod from "./../../assets/imgs/DemonGod.jpg";
import Joy from "./../../assets/imgs/Joy.jpg";
import LoneWolf from "./../../assets/imgs/LoneWolf.jpg";

const CanvaHighLights = () => {
  return( 
   <>
   <Swiper
   modules={[Navigation, Autoplay]}
   navigation
   speed={800}
   slidesPerView={3}
   className="Carousel"
   autoplay={{
    delay:5000,
    disableOnInteraction:false
  }}
   
   >
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={TheDepths} alt="" />
    </SwiperSlide>
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={Joy} alt="" />
    </SwiperSlide>
    <SwiperSlide  className="CanvaSlide">
      <img className="CanvaImg" src={LoneWolf} alt="" />
    </SwiperSlide>
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={DemonGod} alt="" />
    </SwiperSlide> 
   </Swiper>
  </>
  )
};

export default CanvaHighLights;
