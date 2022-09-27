import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CanvaList from "../../components/Canvalist";
import { Canva, Category, User } from "../../types/interfaces";
import { mockedCanva } from "../../mocks/canva";

const Home = () => {
  return (
    <S.home>
      <Header />
      <S.HomeContent>
        <CanvaList list={mockedCanva}></CanvaList>
      </S.HomeContent>
      <Footer />
    </S.home>
  );
};

export default Home;
