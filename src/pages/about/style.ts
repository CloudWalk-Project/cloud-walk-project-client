import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const About = styled.div`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    width: 100vw;
    height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    flex-direction: column;
    border: 0;
    overflow: auto;
  `}
`;

export const AboutContent = styled.div`
  ${() => css`
    display: flex;
    padding: 5rem;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  `}
`;
