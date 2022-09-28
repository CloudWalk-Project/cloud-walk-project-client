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
  height: 55%;
  width: 30%;
  background: linear-gradient(43.38deg, rgba(0, 0, 0, 0.85) 0%, #1d2128 90.24%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;
