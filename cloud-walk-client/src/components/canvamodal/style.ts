import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const CanvaModalConatiner = styled.section`
  position: absolute;
  top: 0;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background: rgba(39, 39, 39, 0.72);
  height: 100vh;
  width: 100vw;
`;
export const CanvaModalForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 65%;
  width: 30%;
  background: ${theme.colors.canvaModalFormColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const modalCloseIconContainer = styled.div`
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

export const canvaImgLabelInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 1rem;
  height: 35%;
  width: 100%;
  .thumbnail {
    height: 100%;
    width: 100%;
  }
`;
export const canvaImgLabelInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 50%;
  border: 2px dashed ${theme.colors.textColor};
  cursor: pointer;
`;
export const canvaFileInput = styled.input`
  display: none;
`;

export const canvaCameraImg = styled.img`
  height: 34px;
  width: 34px;
`;

export const canvaInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 2rem;
  justify-content: space-between;
  height: 45%;
  width: 100%;
`;

export const inputLabelContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 15%;
  width: 80%;
`;

export const canvaLabel = styled.label`
  position: relative;
  z-index: 0;
  top: 0.8rem;
  font-size: 0.8rem;
  color: ${theme.colors.textColor};
  transition: all 0.4s;
`;

export const canvaInput = styled.input`
  z-index: 1;
  color: ${theme.colors.textColor} !important;
  font-size: 1rem !important;
  background: none;
  outline-style: none;
  border: none;
  border-bottom: 1px solid ${theme.colors.textColor};
  transition: all 0.4s;
  :valid ~ label {
    top: 0;
    font-size: 0.7rem;
    color: ${theme.colors.secondaryColor};
  }
  :focus ~ label {
    top: 0;
    font-size: 0.7rem;
    color: ${theme.colors.secondaryColor};
  }
  :valid,
  :focus {
    border-color: ${theme.colors.secondaryColor};
  }
`;

export const inputTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 30%;
  width: 80%;
`;

export const canvaTextAreaLabel = styled.label`
  position: relative;
  z-index: 0;
  font-size: 0.8rem;
  color: ${theme.colors.textColor};
  transition: all 0.4s;
`;

export const canvaTextArea = styled.textarea`
  z-index: 1;
  color: ${theme.colors.textColor} !important;
  height: 70%;
  font-size: 1rem;
  background: none;
  outline-style: none;
  border: 1px solid ${theme.colors.textColor};
  transition: all 0.4s;
  :valid ~ label {
    top: 0;
    color: ${theme.colors.secondaryColor};
  }
  :focus ~ label {
    top: 0;
    color: ${theme.colors.secondaryColor};
  }
  :valid,
  :focus {
    border-color: ${theme.colors.secondaryColor};
  }
`;
export const canvaListInput = styled.input``;

export const sendButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2rem;
  height: 10%;
  width: 100%;
`;
export const sendButton = styled.button`
  border: none;
  color: ${theme.colors.textColor};
  background: ${theme.colors.loginFormButtonColor};
  font-size: 1.5rem;
  height: 70%;
  width: 40%;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    transform: scale(1.05);
    border-radius: 0.2rem;
    font-size: 1.7rem;
  }
`;
