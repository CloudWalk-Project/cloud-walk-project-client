import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";



export const center = styled.body`
  display: flex;
  flex-direction: column;
  width:100%;
  background: ${theme.colors.primaryColor};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: ${theme.colors.textColor};
  color: ${theme.colors.primaryColor};
  padding: 0.5rem;
  height:100%;
  margin:1rem 3rem 5rem 3rem;
  border-radius: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1vw;
`;

export const Heading = styled.p`
  font-size: 3rem;
  margin:2rem 3rem 0rem 3rem;
  display:flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: ${theme.colors.textColor};
  font-weight: bold;
  padding: 0.5rem;
  padding-bottom: 4rem;
`;

export const Button = styled.button`
  font-size: 100%;
  font-weight:bolder;
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  border: 5px solid;
  align-items:center;
  justify-content:center;
  display:flex;
  height:4rem;
  width:4rem;
  border-radius:50%;

  :hover{
    background: ${theme.colors.textColor};
    color: ${theme.colors.primaryColor};
    cursor:pointer;
  }
`;

export const ButtonPage1 = styled.button`
  font-weight:bolder;
  background: #FF7438;
  color: ${theme.colors.primaryColor};
  align-items:center;
  justify-content:center;
  display:flex;
  margin:0rem 0.5rem 0rem 0rem;
  padding: 1rem;
  border: 10px solid #FF7438;
  border-radius: 5px;
  width: 20%;
  font-size:2vw;

  :hover{
    background: #FF7438;
    opacity: 0.3;
    color: ${theme.colors.primaryColor};
    cursor:pointer;
  }
`;

export const centerbutton = styled.div`
  display: flex;
  flex-direction: row;
  align-itens: center;
  justify-content: flex-start;
  background: ${theme.colors.primaryColor};
  margin-left: 3rem;
  margin-right: 3rem;
  width: 100%;
`;
