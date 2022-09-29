import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const home = styled.div`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    width: 100%;
    height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
    border: 0;
  `}
`;

export const HomeContent = styled.div`
  ${() => css`
    width: 100%;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;
