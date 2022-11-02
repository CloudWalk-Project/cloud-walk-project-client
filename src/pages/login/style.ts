import styled, { css } from "styled-components";

export const loginContainer = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.primaryColor};
  `}
`;
export const loginContent = styled.section`
  ${({}) => css`
    display: flex;
    height: 90vh;
    width: 100vw;
  `}
`;
export const loginFormContainer = styled.section`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
  `}
`;
export const loginForm = styled.form`
  ${({ theme }) => css`
    height: 500px;
    width: 450px;
    background: ${theme.colors.loginFormColor};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `}
`;
export const loginFormHeadingContainer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 100%;
  `}
`;

export const loginFormHeading = styled.h1`
  ${({ theme }) => css`
    margin-top: 1rem;
    padding: 0;
    font-size: 3rem;
    font-weight: 300;
    color: ${theme.colors.textColor};
  `}
`;
export const loginFormInputsContainer = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 100%;
  `}
`;
export const loginFormInputs = styled.div`
  ${({}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    height: 50%;
    width: 100%;
  `}
`;

export const loginFormInput = styled.input`
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
export const loginFormInputLabel = styled.label`
  ${({ theme }) => css`
    position: relative;
    top: 1rem;
    font-weight: 300;
    width: 80%;
    font-size: 1rem;
    color: ${theme.colors.textColor};
    z-index: 0;
    transition: all 0.3s;
  `}
`;
export const loginFormForgotPasswordSpan = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    margin-top: 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    width: 80%;
    color: ${theme.colors.secondaryColor};
  `}
`;

export const loginFormSendButtonContainer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 100%;
  `}
`;

export const loginFormSendButton = styled.button`
${({theme})=>css`
  height: 40%;
  width: 80%;
  font-size: 2rem;
  font-weight: 300;
  color: ${theme.colors.textColor};
  background: ${theme.colors.loginFormButtonColor};
  transition: all 0.3s;
  cursor: pointer;
  :hover{
    border-radius: .5rem;
    transform: scale(1.1);
  }  
`}
`

export const loginRegisterContainer = styled.section`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
  `}
`;
export const loginRegisterFirstTextContainer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
  `}
`;
export const loginRegisterFirstText = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    color: ${theme.colors.textColor};
    font-weight: 400;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    height: 20%;
  `}
`;
export const loginRegisterSecondTextContainer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 5%;
  `}
`;
export const loginRegisterSecondText = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    color: ${theme.colors.textColor};
    font-weight: 400;
    font-size: 2rem;
    width: 100%;
    height: 20%;
    b {
      margin: 0 0.5rem 0 0.5rem;
    }
  `}
`;
export const loginRegisterThirdTextContainer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 5%;
  `}
`;
export const loginRegisterThidText = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    color: ${theme.colors.textColor};
    font-weight: 400;
    font-size: 2rem;
    width: 100%;
    height: 100%;
    height: 20%;
  `}
`;
export const loginRegisterImageContainer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 60%;
    width: 100%;
  `}
`;
export const loginRegisterImage = styled.img`
  ${({ theme }) => css`
    height: 80%;
    width: 60%;
  `}
`;
export const loginRegisterButtonContainer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 10%;
    width: 100%;
  `}
`;
export const loginRegisterButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 30%;
    font-size: 2rem;
    color: ${theme.colors.textColor};
    background: ${theme.colors.loginFormButtonColor};
    transition: all 0.4s;
    cursor: pointer;
    :hover {
      font-weight: bold;
      transform: scale(1.1);
      border-radius: 0.3rem;
    }
  `}
`;
