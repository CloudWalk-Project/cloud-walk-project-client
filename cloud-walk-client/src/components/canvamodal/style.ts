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
  height: 60%;
  width: 28%;
  background: ${theme.colors.canvaModalFormColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const canvaImgLabelInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 1rem;
  height: 35%;
  width: 100%;
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
  justify-content: center;
  align-items: center;
  height: 50%;
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
  top: .8rem;
  font-size: 1rem;
  color: ${theme.colors.textColor};
`;

export const canvaInput = styled.input`
 z-index: 1;
 color: white;
 font-size: 1rem;
 background: none;
 outline-style: none;
 border: none;
 border-bottom: 1px solid ${theme.colors.textColor};
`