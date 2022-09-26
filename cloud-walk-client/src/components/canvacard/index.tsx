import * as S from './style'
import TheDepths from './../../assets/imgs/TheDepths.jpg'

const CanvaCard = () => {
  return (
    <S.Card>
        <S.CardImg src={TheDepths}></S.CardImg>
        <S.CardInfoContainer>
            <S.CardInfoNameCategory>
             <S.CardInfoCategory>Wallpaper</S.CardInfoCategory>
              <S.CardInfoName>"TheDepths"</S.CardInfoName>
            </S.CardInfoNameCategory>
            <S.CardInfoPriceContainer>
                <S.CardInfoPrice>R$400,00</S.CardInfoPrice>
            </S.CardInfoPriceContainer>
        </S.CardInfoContainer>
    </S.Card>
  )
}

export default CanvaCard