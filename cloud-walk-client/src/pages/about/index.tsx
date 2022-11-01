import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import empresa from "../../assets/imgs/CloudWalk.svg";

const About = () => {
  return (
    <>
      <S.About>
        <Header />
        <S.AboutContent>
          <img alt="CloudWalk" src={empresa} />
        </S.AboutContent>
        {/* <Footer /> */}
      </S.About>
    </>
  );
};

export default About;
