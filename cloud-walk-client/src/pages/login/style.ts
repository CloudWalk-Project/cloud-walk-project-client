import styled, { css } from "styled-components";

export const loginContainer = styled.main `
${({theme})=>css`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.primaryColor};
`}
`
export const loginContent = styled.section `
${({})=>css`
  display: flex;
  height: 90vh;
  width: 100vw;
`}
`
export const loginFormContainer = styled.section `
${({})=>css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`}
`
export const loginForm = styled.form `
${({theme})=>css`
   height: 500px;
   width: 450px;
   background: ${theme.colors.loginFormColor};
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`}
`
export const loginFormHeadingContainer = styled.div`
${({})=>css`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 30%;
   width: 100%;
`}
`

export const loginFormHeading = styled.h1`
${({theme})=>css`
   margin-top:1rem;
   padding: 0;
   font-size: 3rem;
   font-weight: 300;
   color: ${theme.colors.textColor};
`}
`

export const loginRegisterContainer = styled.section `
${({})=>css`
  display: flex;
  height: 100%;
  width: 50%;
`}
`
