import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const home = styled.section`
  ${() => css`
    
    background-color: ${theme.colors.primaryColor};
    width: 100vw;
    height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    flex-direction: column;
    border: 0;
  `}
`;

export const HomeContent = styled.main`
  ${() => css`
    display: flex;
    justify-content: center; /* Tirar Justify e Align depois*/
    align-items: center;
    width: 100%;
    overflow: auto;
    height: 90vh;
    box-sizing: border-box;
  `}
`;
