import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const Manage = styled.div`
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

export const manageContent = styled.section`
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 100%;
  background-color: ${theme.colors.primaryColor};
  `;

export const manageListHolder = styled.div`
height: 90%;
width: 85%;
border:1px solid  ${theme.colors.background};
h1{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 10%;
}
`
export const listHeader = styled.div`
display: flex;
height: 10%;
width: 100%;
.list-options{
  display: flex;
  align-items: end;
  height: 100%;
  width: 30%;
  border: 1px solid white;
  button{
    font-size: 1.5rem;
    height: 60%;
    width: 50%;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    background: ${theme.colors.manageInactiveButton};
    transition: all 0.4s;
  }
}
`
