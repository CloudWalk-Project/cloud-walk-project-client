import styled, { css } from "styled-components";

export const Card = styled.section`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 350px;
    transition: all 0.4s;
    .update {
      filter: grayscale(1);
    }
    .types {
      filter: grayscale(0%);
    }
    :hover{
      transform: scale(1.05);
    }
  `}
`;
export const CardImg = styled.img`
  ${({}) => css`
    height: 80%;
    width: 100%;
  `}
`;
export const CardInfoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    box-sizing: border-box;
    padding-left: 1rem;
    height: 20%;
    width: 100%;
    ::after {
      content: "";
      background: ${theme.colors.textColor};
      border-radius: 0.2rem;
      position: absolute;
      bottom: 5%;
      left: 0;
      height: 80%;
      width: 2px;
    }
  `}
`;
export const CardInfoNameCategory = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    .big-name {
      font-size: 1.2rem;
    }
  `}
`;

export const CardInfoCategory = styled.span`
  ${({}) => css`
    display: flex;
    box-sizing: border-box;
    padding-top: 2%;
    font-weight: bold;
    height: 50%;
    width: 100%;
  `}
`;

export const CardInfoName = styled.span`
  ${({}) => css`
    display: flex;
    align-items: flex-end;
    height: 50%;
    width: 100%;
    font-weight: 300;
    font-size: 1.5rem;
  `}
`;

export const CardInfoPriceContainer = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    height: 100%;
    width: 50%;
  `}
`;

export const CardInfoPrice = styled.span`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.secondaryColor};
    height: fit-content;
    font-size: 1.5rem;
    width: fit-content;
  `}
`;
