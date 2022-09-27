import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CanvaList from "../../components/Canvalist";
import { Canva, Category, User } from "../../types/interfaces";
import { mockedCanva } from "../../mocks/canva";

import CanvaHighLights from "../../components/CanvaHighLights";

const Home = () => {
  return (
    <S.home>
      <Header />
      <S.HomeContent>

        <S.HighLightsHeading>DESTAQUES</S.HighLightsHeading>
        <S.HomeHighLightsContainer>
         <CanvaHighLights></CanvaHighLights>
        </S.HomeHighLightsContainer>

        <CanvaList list={mockedCanva}></CanvaList>
      </S.HomeContent>
      <Footer />
    </S.home>
  );
};

export default Home;
