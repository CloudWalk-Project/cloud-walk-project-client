import styled, { css } from "styled-components"; // importing to enable the use of css in this .ts file (must install first)
import theme from "../../assets/styles/theme";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3.8rem;
  display: flex;
  color: ${theme.colors.textColor};
  background-color: ${theme.colors.primaryColor};
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  height: 3.8rem;
  width: 50%;
  display: flex;
  background-color: ${theme.colors.primaryColor};
  align-items: center;
  box-sizing: border-box;
  img {
    width: 3.125rem;
    margin-left: 14vw;
  }
  p {
    text-transform: capitalize;
    font-size: 20px;
  }
`;

export const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInputContainer = styled.div`
  width: 21.875rem;
  height: 2.125rem;
  background-color: #16151b;
  border: 1px solid #393c49;
  border-radius: 3px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;

  form {
    display: flex;
    width: 21.875rem;
  }
  input {
    background-color: #16151b;
    width: 21.875rem;
    color: ${theme.colors.textColor};
    font-size: 0.9rem;
    padding: 0.375rem 0.75rem;
    padding-top: 0.375rem;
    padding-right: 1.875rem;
    padding-bottom: 0.375rem;
    padding-left: 0.75rem;
    :focus {
      outline: none;
    }
  }
  button {
    background-color: #16151b;
    width: 3.125rem;
    height: 2.125rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
