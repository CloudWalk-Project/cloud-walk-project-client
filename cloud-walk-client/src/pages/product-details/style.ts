import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const Product = styled.div`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
    display: flex;
    align-itens: center;
    justify-content:center;
    flex-direction: column;
    justify-content: space-evenly;
  `}
`;

export const center = styled.div`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
    display: flex;
    align-itens: center;
    justify-content:center;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: center;
    height: 100vh;
  `}
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  ${() => css`
    background-color: #20232B;
    color: ${theme.colors.textColor};
    display: flex;
    align-itens: center;
    justify-content:center;
    padding: 2rem;
    border-radius: 1rem;
    height: 55%;
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
    align-itens: center;
    justify-content:flex-start;
    flex-direction: column;
    padding: 2rem;
    margin: 1rem;
    height: 50%;
  `}
  @media only screen and (max-width: 800px) {
    margin: 1rem;
  }
`;
export const BtnAlign = styled.button`
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
    background-color: #FF7337;
    color: ${theme.colors.textColor};
    font-height: bolder;
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    :hover{
      background-color: #EE4D2D;
    }
  `}
`;