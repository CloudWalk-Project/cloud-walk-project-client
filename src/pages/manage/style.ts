import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const Manage = styled.div`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    width: 100%;
    height: 100vh;
    overflow: hidden;
    color: ${theme.colors.textColor};
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
  h1 {
    display: flex;
    margin: 0;
    justify-content: flex-start;
    width: 100%;
    height: 10%;
  }
`;

export const listHeader = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  border-bottom:1px solid ${theme.colors.secondaryColor};
  .list-options {
    display: flex;
    align-items: end;
    height: 100%;
    width: 30%;
    button {
      font-size: 1.5rem;
      height: 60%;
      width: 50%;
      font-weight: bold;
      color: gray;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      background: ${theme.colors.manageInactiveButton};
      transition: all 0.3s;
      overflow: hidden;
      :hover {
        background-color: ${theme.colors.secondaryColor};
        color: ${theme.colors.textColor};
      }
    }
    .list-categoryOP-categories,
    .list-userOP-users,
    .list-attOP-att {
      height: 80%;
      background-color: ${theme.colors.secondaryColor};
      color: ${theme.colors.textColor};
    }
  }
  .add-icon-container {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    height: 100%;
    width: 70%;
    .add {
      color: #fff;
      height: 3rem;
      width: 3rem;
      border-top-left-radius: .5em;
      border-top-right-radius: .5rem;
      background-color: ${theme.colors.secondaryColor};
      cursor: pointer;
    }
  }
`;

export const manageList = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${theme.colors.background};
`;
