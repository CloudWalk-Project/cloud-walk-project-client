import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const PasswordModalContainer = styled.form`
    background: ${theme.colors.canvaModalFormColor};
    padding: 1.5rem;
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    border-radius: 8px;
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .button-container{
      display:flex;
      width: 100%;
      justify-content: space-around ;
      .btn{
        width:40%;
        font-size: 1.2rem;
      }
      .send{
        background-color: ${theme.colors.secondaryColor};
        transition: all 0.4s;
        :hover{
         color: white;
         transform: scale(1.05);
        }
      }
      .cancel{
        background: none;
        border: 1px solid ${theme.colors.textColor}
      }
    }
`;

export const Select = styled.select`
    all: unset;
    padding: 0.8rem 1rem;
    box-sizing: border-box;
    width: 18.625rem;
    height: 3rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.textColor};

`;
