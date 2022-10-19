import styled from "styled-components";
import theme from "../../assets/styles/theme";

export const Box = styled.footer`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-evenly;
  background: ${theme.colors.textColor};
  color: ${theme.colors.primaryColor};
  width: 100%;
  border: 1px solid ${theme.colors.primaryColor};
  margin-bottom: 0.5rem;
`;

export const Text = styled.h1`
    padding: 1rem;
`;