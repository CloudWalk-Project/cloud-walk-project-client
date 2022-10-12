import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";
import downArrow from "./../../assets/imgs/DownArrow.svg";

export const home = styled.div`
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

export const HomeContent = styled.div`
  ${() => css`
    display: flex;
    padding: 5rem;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  `}
`;

export const HighLightsHeading = styled.h1`
  position: relative;
  height: fit-content;
  width: 100%;
  font-size: 2.5rem;
  border-bottom: 1px solid white;
`;

export const HomeHighLightsContainer = styled.section`
  position: relative;
  height: 35rem;
  width: 100%;
  font-size: 3.5rem;
  justify-content: center;
`;

export const listOptionsContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  box-sizing: border-box;
  height: 4rem;
  width: 100%;
`;

export const listFiltersContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 50%;
  select {
    position: relative;
    width: 10rem;
    margin-left: 2rem;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.textColor};
    font-size: 1.5rem;
    cursor: pointer;
    option {
      max-height: 0.5rem;
      overflow: auto;
      background-color: ${theme.colors.textColor};
      color: black;
      font-size: 1.2rem;
    }
  }
`;

export const filterButton = styled.div`
  display: flex;
  cursor: pointer;
  background-color: #d8d8d8;
  margin-right: 2rem;
  height: 100%;
  width: 10rem;
  transition: all 0.4s;
  :hover {
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.textColor};
    font-size: 1.5rem;
    cursor: pointer;
    option {
      max-height: 0.5rem;
      overflow: auto;
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textColor};
      font-size: 1.2rem;
    }
  }
`;

export const adminSettingsContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 100%;
  width: 50%;
  .active {
    span {
      font-size: 1.5rem;
    }
  }
`;

export const adminOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  width: 50%;
  transition: all 0.4s;
  span {
    font-size: 0;
  }
  .span-delete-:hover,
  .span-delete-delete {
    color: red;
  }
  .span-update-:hover,
  .span-update-update {
    color: green;
  }
  .span-add-:hover,
  .span-add-add {
    color: cyan;
  }
`;

export const adminOptionsSpan = styled.span`
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  transition: all 0.4s;
`;

export const gearContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  height: 100%;
  width: 10%;
  .gear {
    cursor: pointer;
    height: 100%;
    width: 50%;
    transition: all 0.4s;
    color: ${theme.colors.textColor};
  }
  .gear-active {
    transform: rotate(-180deg);
  }
`;
