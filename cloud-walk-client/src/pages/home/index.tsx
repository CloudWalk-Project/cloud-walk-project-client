import * as S from "./style";
import Header from "../../components/Header";
import CanvaCard from "../../components/CanvaCard";
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
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
