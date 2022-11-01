import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const categoryModal = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(39, 39, 39, 0.72);
`;

export const categoryForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 46%;
  width: 30%;
  background: ${theme.colors.canvaModalFormColor};
  .close-icon-container {
    display: flex;
    justify-content: end;
    height: 5%;
    width: 100%;
    .close-icon {
      cursor: pointer;
      height: 2.5rem;
      width: 2.5rem;
    }
  }
  .heading-container {
    height: 10%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.5rem;
    h1 {
      margin: 0;
    }
  }
`;
export const inputsMainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60%;
  width: 100%;
  padding-left: 1rem;
  .input-label-container {
    display: flex;
    flex-direction: column-reverse;
    height: 20%;
    width: 100%;
    input {
      height: 50%;
      width: 80%;
      color: ${theme.colors.textColor};
      border: none;
      background: none;
      border-bottom: 1px solid ${theme.colors.textColor};
      outline-style: none;
      z-index: 1;
      transition: all 0.4s;
      :valid ~ label,
      :focus ~ label {
        color: ${theme.colors.secondaryColor};
        font-size: 0.8rem;
        top: 10px;
      }
      :valid,
      :focus {
        border-color: ${theme.colors.secondaryColor};
      }
    }
    label {
      font-size: 0.9rem;
      position: relative;
      top: 1.5rem;
      height: 50%;
      width: 50%;
      z-index: 0;
      transition: all 0.4s;
    }
  }
  .text-area-label-container {
    display: flex;
    flex-direction: column-reverse;
    height: 40%;
    width: 100%;
    label{
        height: auto;
        font-size: 0.9rem;
        transition: all 0.4s;
    }
    textarea {
      height:60% ;
      width: 80%;
      background: none;
      border: 1px solid ${theme.colors.textColor};
      outline-style: none;
      z-index: 1;
      transition: all 0.4s;
      color: ${theme.colors.textColor};
      :valid ~ label,
      :focus ~ label {
        color: ${theme.colors.secondaryColor};
      }
      :valid,
      :focus {
        border-color: ${theme.colors.secondaryColor};
      }
    }
  }
`;

export const sendButtonContainer = styled.div`
display: flex;
align-items: center;
height: 25%;
width: 100%;
padding-left: 1rem;
button{
    font-size: 1.5rem;
    height: 55%;
    width: 40%;
    color: ${theme.colors.textColor};
    background: ${theme.colors.loginFormButtonColor};
}
`