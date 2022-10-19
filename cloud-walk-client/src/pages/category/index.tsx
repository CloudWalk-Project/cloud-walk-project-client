import * as S from "./style";
import Header from "../../components/Header";
import Manager from "../../components/Manager";

const Home = () => {
  return (
    <S.Category>
      <Header />
      <S.BgCategory>
          <Manager/>
      </S.BgCategory>
    </S.Category>
  );
};

export default Home;
