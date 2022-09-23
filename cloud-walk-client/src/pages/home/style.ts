import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

interface GenresNavigationButtonProps {
  active?: boolean;
}

export const home = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    min-width: 100vw;
    min-height: 100vh;
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
