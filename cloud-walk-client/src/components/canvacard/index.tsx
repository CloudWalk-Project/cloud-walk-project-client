import * as S from "./style";
import { Canva } from "../../types/interfaces";

interface CanvaCardProps {
  canva: Canva;
}

const CanvaCard = ({ canva }: CanvaCardProps) => {
  return (
    <S.Card>
      <S.CardImg alt={canva.name} src={canva.image}></S.CardImg>
      <S.CardInfoContainer>
        <S.CardInfoNameCategory>
          <S.CardInfoCategory>{canva.categoryName}</S.CardInfoCategory>
          <S.CardInfoName>{canva.name}</S.CardInfoName>
        </S.CardInfoNameCategory>
        <S.CardInfoPriceContainer>
          <S.CardInfoPrice>R$ {canva.price}</S.CardInfoPrice>
        </S.CardInfoPriceContainer>
      </S.CardInfoContainer>
    </S.Card>
  );
};

export default CanvaCard;
