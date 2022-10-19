import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const deleteModalMainContainer = styled.section`
 position: absolute;
 display: flex;
 top: 0;
 z-index: 2;
 background: rgba(39, 39, 39, 0.72);
 height: 100vh;
 width: 100vw;
 justify-content: center;
 align-items: center;
`
export const deleteModalForm = styled.form`
 height: 200px;
 width: 450px;
 background: ${theme.colors.canvaModalFormColor};
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const modalInfoContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 70%;
 width: 100%;
 .to-delete-item{
    color: ${theme.colors.secondaryColor}
 }
`
export const modalInfo = styled.span`
color: ${theme.colors.textColor};
font-size: 1.3rem;
b{
    color: red;
}
`
export const modalButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;
.cancel-button{
background: ${theme.colors.loginFormButtonColor};
}
.delete-button{
    border: 1px solid ${theme.colors.textColor};
    background:none;
    :hover{
        border: none;
        background-color: red;
    }
}
`
export const modalButton = styled.button`
height: 90%;
width: 40%;
color: ${theme.colors.textColor};
font-size: 1.2rem;
transition: all 0.4s;
:hover{
    transform: scale(1.05);
    border-radius: .2rem;
}
`