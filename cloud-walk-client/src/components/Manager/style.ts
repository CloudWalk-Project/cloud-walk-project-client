import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: ${theme.colors.textColor};
  color: ${theme.colors.primaryColor};
  margin:3rem;
  height:100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
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
`;


export const Button = styled.button`
  font-size: 3rem;
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