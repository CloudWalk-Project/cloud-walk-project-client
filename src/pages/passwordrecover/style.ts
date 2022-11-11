import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const PasswordContainer = styled.main`

    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primaryColor};

`;

export const PasswordForm = styled.div`

    height: 40%;
    width: 30%;
    margin-top: 10%;
    margin-left: 30%;
    background: ${theme.colors.loginFormColor};

`;

export const PasswordFormHeading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 90%;
    padding-left: 10%;
    font-weight: bold;
    font-size: 1.5rem;
    justify-content: center;
    color: ${theme.colors.textColor};
  `}
`;
export const PasswordFormInputsContainer = styled.form`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 100%;
    padding-left: 10%;
  `}
`;

export const PasswordInputFather = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column-reverse;
  `}
`;

export const PasswordFormInputLabel = styled.label`
  ${({ theme }) => css`
    position: relative;
    top: 1rem;
    font-weight: 1;
    width: 80%;
    font-size: 1rem;
    color: ${theme.colors.textColor};
    z-index: 0;
    transition: all 0.3s;
  `}
`;

export const PasswordFormInput = styled.input`
  ${({ theme }) => css`
    background: none;
    border: none;
    outline: none;
    color: ${theme.colors.textColor};
    font-size: 1rem;
    width: 80%;
    border-bottom: 3px solid ${theme.colors.textColor};
    z-index: 1;
    transition: all 0.3s;
  `}
`;
export const Token = styled.input``;

export const PasswordFormSendButton = styled.div`
  ${({ theme }) => css`
    height: 40%;
    width: 80%;
    padding-top: 5%;
    padding-left: 25%;
  `}
`;
