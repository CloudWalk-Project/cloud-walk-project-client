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
  font-size: 3.5rem;
  ::after {
    content: "";
    position: absolute;
    background-color: ${theme.colors.textColor};
    height: 2px;
    width: 350px;
    top: 65px;
    left: 15px;
  }
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
  .active {
    display: flex;
    color: black;
    flex-direction: column;
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
    .filter-span {
      color: white;
    }
    .filter-icon {
      color: white;
    }
  }
`;
export const filterArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .filter-icon {
    transition: all 0.4s;
    transform: rotate(180deg);
    height: 50%;
    width: 100%;
    color: black;
  }
`;

export const filterNameSpan = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
  font-size: 1.5rem;
  color: black;
  transition: all 0.4s;
`;

export const HomeHighLightsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  align-items: flex-end;
  height: 40%;
  width: 95%;
`;

export const dropDownContainer = styled.div`
  display: none;
  position: absolute;
  top: 63px;
  left: 0px;
  height: fit-content;
  max-height: 10rem;
  overflow: auto;
  width: 10rem;
  background-color: white;
`;
export const dropDownContainer2 = styled.div`
  display: none;
  position: absolute;
  top: 63px;
  right: 469px;
  height: 10rem;
  width: 10rem;
  background-color: white;
  height: fit-content;
  max-height: 10rem;
  overflow: auto;
`;

export const adminSettingsContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 100%;
  width: 50%;
  .active{
    span{
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
  span{
    font-size: 0;
  }
  .span-delete-:hover,
  .span-delete-delete{
    color: red;
  }
  .span-update-:hover,
  .span-update-update{
    color: green;
  }
  .span-add-:hover,
  .span-add-add{
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
    color: ${theme.colors.textColor}
  }
  .gear-active{
    transform: rotate(-180deg);
  }
`;