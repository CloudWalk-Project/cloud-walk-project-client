import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const userModalContainer = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  background-color: rgba(39, 39, 39, 0.72);
`;
export const userModalForm = styled.form`
  height: 65%;
  width: 30%;
  background: ${theme.colors.canvaModalFormColor};
`;

export const closeModalIconContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 5%;
  width: 100%;
  .close-icon {
    cursor: pointer;
    height: 2.5rem;
    color: ${theme.colors.textColor};
    width: 10%;
  }
`;

export const imageInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
  /* border: 1px solid white; */
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    border: 2px dashed ${theme.colors.textColor};
    img {
      cursor: pointer;
      height: 34px;
      width: 34px;
    }
    .thumbnail{
      height: 100%;
      width: 100%;
    }
  }
  input {
    display: none;
  }
`;

export const inputsMainContainer = styled.div`
  height: 45%;
  width: 100%;
  padding-left: 2rem;
  /* border: 1px solid white; */
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
`;

export const submitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  width: 100%;
  button{
    margin-left: 2rem;
    height: 50%;
    width: 40%;
    border: none;
    color: ${theme.colors.textColor};
    font-size: 1.5rem;
    background: ${theme.colors.loginFormButtonColor};
    transition: all 0.4s;
    :hover{
      transform: scale(1.1);
    }
  }
`;
