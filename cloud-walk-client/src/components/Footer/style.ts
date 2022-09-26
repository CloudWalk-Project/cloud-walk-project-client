import styled from "styled-components";
import theme from "../../assets/styles/theme";

export const Box = styled.footer`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.primaryColor};
  border-top: 1px solid ${theme.colors.textColor};
  position: absolute;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  padding-left: 20rem;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 1.25rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Heading = styled.p`
  font-size: 1.5rem;
  color: ${theme.colors.textColor};
  margin-bottom: 2.5rem;
  font-weight: bold;
`;

export const FooterLink = styled.a`
  color: ${theme.colors.textColor};
  margin-bottom: 1.25rem;
  font-size: 1.13rem;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.secondaryColor};
    transition: 200ms ease-in;
  }
`;
