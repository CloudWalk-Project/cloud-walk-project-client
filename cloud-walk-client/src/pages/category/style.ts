import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const Category = styled.div`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    width: 100%;
    height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0;
  `}
`;

export const BgCategory = styled.div`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    width: 100%;
    height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: center;
    border: 0;
    margin-top: 1rem;
  `}
`;