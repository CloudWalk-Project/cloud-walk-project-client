import styled from "styled-components"
import theme from "../../assets/styles/theme"

export const batchUpdtModalContainer = styled.section`
position: absolute;
top: 0;
right: 0;
height: 100vh;
width: 100vw;
background: rgba(39, 39, 39, 0.72);
display: flex;
justify-content: center;
align-items: center;
`
export const modalForm = styled.form`
display: flex;
flex-direction: column;
height: 70%;
width: 50%;
background: ${theme.colors.canvaModalFormColor};
.close-icon-container{
    display: flex;
    justify-content: end;
    height: 5%;
    width: 100%;
    .icon{
        cursor: pointer;
    height: 3.5rem;
    color: ${theme.colors.textColor};
    width: 5%;
    }
}
h1{ 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    height: 10%;
    width: 100%;
    margin: 0;
    padding:0;
    color: ${theme.colors.secondaryColor};
    font-weight: bold;
}
`

export const batchInfoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50%;
width: 100%;
p{  
    margin-right: 1rem;
    height: 60%;
    font-size: 1.5rem;
    width: 50%;
    text-align: justify;
    b{
        color: ${theme.colors.secondaryColor};
    }
}
`
export const exampleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 75%;
width: 40%;
img{
    height: 100%;
    width: 100%;
}
`
export const sendButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left: 2rem;
height: 25%;
width: 100%;
button{
    height: 30%;
    width: 50%;
    background:${theme.colors.loginFormButtonColor};
    color: ${theme.colors.textColor};
    font-size: 2rem;
    transition: all 0.4s;
    :hover{
        transform: scale(1.1);
    }
}
`
