import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CanvaCard from "../../components/CanvaCard";


const Home = () => {
  return (
    <S.home>
        <Header />
      <S.HomeContent>
        <CanvaCard/>
      </S.HomeContent>
    </S.home>
  );
};

export default Home;
