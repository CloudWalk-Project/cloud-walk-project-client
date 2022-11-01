import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const updateRoleModal = styled.section`
position: absolute;
top: 0;
right: 0;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(39, 39, 39, 0.72);
`

export const updateRoleForm = styled.form`
height: 25%;
width: 30%;
background: ${theme.colors.canvaModalFormColor};
.close-icon-container{
    display: flex;
    justify-content: end;
    height: 5%;
    width: 100%;
    .close-icon{
    width: auto;
    cursor: pointer;
    height: 2.5rem;
}
}
`

export const headingContainer = styled.div`
padding-top: 1rem;
box-sizing: border-box;
display: flex;
justify-content: space-between;
height: 10%;
width: 100%;
padding-left: 1rem;
h4{ 
    margin: 0;
    font-size: 1.5rem;
    width: 100%;
    b{
        color:${theme.colors.secondaryColor}
    }
}
`
export const inputContainer = styled.div`
display: flex;
justify-content: center;
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
        top: -5px;
      }
      :valid,
      :focus {
        border-color: ${theme.colors.secondaryColor};
      }
    }
    label {
      font-size: 1.2rem;
      position: relative;
      height: 50%;
      width: 50%;
      z-index: 0;
      transition: all 0.4s;
    }
  }
`
export const sendButtonContainer = styled.div`
display: flex;
height: 15%;
width: 100%;
box-sizing: border-box;
justify-content: start;
padding-left: 1rem;
button{
    height: 100%;
    width: 50%;
    background: ${theme.colors.loginFormButtonColor};
    color: #fff;
    font-size: 1.5rem;
}
`