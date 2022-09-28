import styled from "styled-components";
import theme from "../../assets/styles/theme";

export const Box = styled.footer`
  /* padding-top: 1rem; */
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: ${theme.colors.primaryColor};
  border-top: 1px solid ${theme.colors.textColor};
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
  /* grid-gap: 1.25rem; */
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

  &:hover {
    color: ${theme.colors.secondaryColor};
    transition: 200ms ease-in;
  }
`;
