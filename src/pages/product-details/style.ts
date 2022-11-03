import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const Product = styled.div`
  ${() => css`
  display: flex;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
    /* align-items: center; */
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    width: 100vw;
  `}
`;

export const center = styled.div`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: row;
    justify-content: center;
    height: 95%;
    width: 100%;
    overflow: hidden;
  `}
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  ${() => css`
    background: ${theme.colors.productDetailGradient};
    color: ${theme.colors.textColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    border-radius: 1rem;
    width: 30%;
    height: 80%;
    border-radius: .5rem;
    box-shadow: inset 0px 0px 0px 4px ${theme.colors.productDetailPC};
    border: 1px solid ${theme.colors.productDetailPC};
    .left-name-heading{
      height: 10%;
      width: 100%;
      border-radius: .5rem;
      background-color: ${theme.colors.productDetailPC};
    }
    h1{
      font-size: 4rem;
      width: 100%;
      border-radius: .5rem;
      height: fit-content;
      display: flex;
      justify-content: center;
    }
    .big-name{
      font-size: 3rem;
    }
  `}
  @media only screen and (max-width: 800px) {
    margin: 1rem;
  }
`;

export const Right = styled.div`
  ${() => css`
    background-color: #20232B;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
    padding: 2rem;
    margin: 1rem;
    width: 50%;
    height: 70%;
    span{
      font-size: 1.5rem;
    }
  `}
  @media only screen and (max-width: 800px) {
    margin: 1rem;
  }
`;
export const BtnAlign = styled.div`
  ${() => css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      background-color: #20232B;
      width: 100%;
  `}
`;

export const Btn = styled.button`
  ${() => css`
    background: ${theme.colors.productDetailCartButtonGradient};
    color: ${theme.colors.textColor};
    font-size: 1.5rem;
    font-weight: bolder;
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    transition: all 0.4s;
    :hover{
      transform: scale(1.1);
    }
  `}
`;

export const canvaImageContainer = styled.div`
height: 90%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const canvaImage = styled.img`
height: 90%;
width: 80%;
`

export const canvaInfoContainer = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding-top: 2rem;
width: 100%;
height:70%;
span{
  padding-left: 1rem;
}
h2{
  color: ${theme.colors.secondaryColor};
  padding-left: 1rem;
  font-size: 5rem;
  padding-top: 5rem;
}
` 