import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const home = styled.section`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    width: 100vw;
    height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;

export const HomeContent = styled.main`
  ${() => css`
    width: 100%;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;
