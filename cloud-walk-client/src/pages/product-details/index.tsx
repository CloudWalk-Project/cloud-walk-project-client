import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../assets/imgs/Dream_TradingCard (1).jpg"

const Product = () => {
  return (
    <S.Product>
      <Header />
      <S.center>
        <S.Left>
          <h1>"Nome da Obra"</h1>
        </S.Left>
        <S.Right>
          <h1>Quadro</h1>
          <h3>Quadro óleo sobre tela, com tamanho de 70x40 cm</h3>
          <S.BtnAlign>
            <S.Btn>ADICIONAR AO CART</S.Btn>
            <S.Btn>COMPRAR AGORA</S.Btn>
          </S.BtnAlign>
        </S.Right>
      </S.center>
      <Footer />
    </S.Product>
  );
};

export default Product;