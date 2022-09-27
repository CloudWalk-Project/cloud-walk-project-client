import * as S from "./../CanvaCard/style";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { Navigation, Autoplay,} from 'swiper'
import "swiper/css/navigation"
import TheDepths from "./../../assets/imgs/TheDepths.jpg";
import DemonGod from "./../../assets/imgs/DemonGod.jpg";
import Joy from "./../../assets/imgs/Joy.jpg";
import LoneWolf from "./../../assets/imgs/LoneWolf.jpg";
import FeverDream from "./../../assets/imgs/FeverDream.jpg";
import Striker from "./../../assets/imgs/Striker.jpg";
import NewEra from "./../../assets/imgs/NewEra.jpg";
import TheWoods from "./../../assets/imgs/TheWoods.jpg";
import Undefeated from "./../../assets/imgs/Undefeated.jpg";

const CanvaHighLights = () => {
  return( 
   <>
   <Swiper
   modules={[Navigation, Autoplay]}
   navigation
   speed={800}
   slidesPerView={3}
   className="Carousel"
  //  autoplay={{
  //   delay:5000,
  //   disableOnInteraction:false
  // }}
   
   >
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={TheDepths} alt="" />
       <S.CardInfoContainer className="SlideInfo">
       <S.CardInfoNameCategory>
             <S.CardInfoCategory>Wallpaper</S.CardInfoCategory>
              <S.CardInfoName>"TheDepths"</S.CardInfoName>
            </S.CardInfoNameCategory>
            <S.CardInfoPriceContainer>
                <S.CardInfoPrice>R$400,00</S.CardInfoPrice>
            </S.CardInfoPriceContainer>
       </S.CardInfoContainer>
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
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={FeverDream} alt="" />
    </SwiperSlide> 
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={Undefeated} alt="" />
    </SwiperSlide> 
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={TheWoods} alt="" />
    </SwiperSlide> 
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={NewEra} alt="" />
    </SwiperSlide> 
    <SwiperSlide className="CanvaSlide">
      <img className="CanvaImg" src={Striker} alt="" />
    </SwiperSlide> 
   </Swiper>
  </>
  )
};

export default CanvaHighLights;
