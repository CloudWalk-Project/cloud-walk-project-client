import * as S from "./style";
import './style.css'
import { Canva } from "../../types/interfaces";
import { useEffect, useState } from "react";

interface CanvaCardProps {
  canva: Canva;
  type: string;
}

const CanvaCard = ({ canva, type }: CanvaCardProps) => {
  return (
    <>
    {type=='update'? <div className={`typeUP-${type} types`} >ATUALIZAR</div> : type=='delete'? <div className={`typeDEL-${type} types`}>DELETAR</div> :"" }
    <S.Card className={type}>
      <S.CardImg  alt={canva.name} src={canva.image}></S.CardImg>
      <S.CardInfoContainer>
        <S.CardInfoNameCategory>
          <S.CardInfoCategory>{canva.categoryName}</S.CardInfoCategory>
          <S.CardInfoName className={canva.name.split(" ").length > 1 ? "big-name" : "" }>{canva.name}</S.CardInfoName>
        </S.CardInfoNameCategory>
        <S.CardInfoPriceContainer>
          <S.CardInfoPrice>R$ {canva.price}</S.CardInfoPrice>
        </S.CardInfoPriceContainer>
      </S.CardInfoContainer>
    </S.Card>
    </> 
  );
};

export default CanvaCard;
