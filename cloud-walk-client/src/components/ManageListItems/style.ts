import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const listContainer = styled.ul`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const addIconContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: end;
    align-items: flex-end;
    height: 0;
    width: 100%;
    .add {
      color: #fff;
      height: 4rem;
      width: 4rem;
      border-top-left-radius: .5em;
      border-top-right-radius: .5rem;
      background-color: ${theme.colors.secondaryColor};
      cursor: pointer;
    }
`

export const listItemCard = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  font-size: 3rem;
  color: black;
  background-color: #d9d9d9;
  border-bottom: 1px solid #000;
`;

export const itemCardNameContainer = styled.div`
  height: 100%;
  width: 50%;
  span{
    font-size: 2rem;
  }
`;
export const itemCardManageContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 50%;
  padding-right: .5rem;
  .delete-button {
    color: red;
    margin-left: .5rem;
  }
  .icon {
    cursor: pointer;
    transition: all 0.4s;
    :hover{
      transform: scale(1.05);
    }
  }
`;

export const paginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 100%;

  .active > .page-link {
    background-color: ${theme.colors.secondaryColor};
    border-color: ${theme.colors.secondaryColor};
    color: #fff;
  }
  .active > .page-link:focus {
    box-shadow: 0 0 0 0.25rem rgba(253, 145, 95, 0.31),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .page-link:hover {
    color: ${theme.colors.secondaryColor};
  }
  .page-link {
    z-index: 0;
    color: black;
  }
`;

export const loadingList = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${theme.colors.secondaryColor};
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${theme.colors.secondaryColor} transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`