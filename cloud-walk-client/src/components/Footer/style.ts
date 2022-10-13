import styled from "styled-components";
import theme from "../../assets/styles/theme";

export const Box = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.primaryColor};
  border-top: 1px solid ${theme.colors.textColor};
  position: fixed;
  padding: 1rem;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

export const Heading = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textColor};
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const FooterLink = styled.a`
  color: ${theme.colors.textColor};
  /* margin-bottom: 1.25rem; */
  font-size: 1rem;
  text-decoration: none;
  display: flex;

  &:hover {
    color: ${theme.colors.secondaryColor};
    transition: 200ms ease-in;
  }
`;
