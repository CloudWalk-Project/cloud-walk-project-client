import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const home = styled.div`
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

export const HomeContent = styled.div`
  ${() => css`
    display: flex;
    padding: 5rem 0 0 5rem;
    flex-direction: column;
    width: 100%;
    overflow: auto;
    height: 90vh;
    box-sizing: border-box;
  `}
`;

export const HighLightsHeading = styled.h1`
 position: relative;
 height: fit-content;
 width: 100%;
 font-size: 3.5rem;
 ::after{
  content: "";
  position: absolute;
  background-color: ${theme.colors.textColor} ;
  height: 2px;
  width: 350px;
  top: 65px;
  left: 15px;
 }
`

export const HomeHighLightsContainer = styled.section`
 display: flex;
 flex-direction: column;
 margin-top: 5rem;
 align-items: flex-end;
 height: 40%;
 width: 95%;
`