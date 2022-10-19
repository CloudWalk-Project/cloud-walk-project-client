import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3.4rem;
  display: flex;
  color: ${theme.colors.textColor};
  background-color: ${theme.colors.primaryColor};
  align-items: center;
  box-sizing: border-box;
`;

export const Header1 = styled.div`
  height: 3.4rem;
  width: 64%;
  display: flex;
  background-color: ${theme.colors.primaryColor};
  align-items: center;
  box-sizing: border-box;
  /* justify-content: space-between; */
  border-bottom: 1px solid white;

  p {
    margin-left: 2rem;
  }
  img {
    cursor: pointer;
    width: 5rem;
    margin-left: 2rem;
    margin-right: 3rem;
    cursor: pointer;
  }
`;

export const SearchInputContainer = styled.form`
  width: 28rem;
  height: 1.6rem;
  border: 1px solid ${theme.colors.primaryColor};
  border-radius: 3px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: ${theme.colors.primaryColor};

  input {
    background-color: ${theme.colors.terciaryColor};
    width: 21.875rem;
    color: ${theme.colors.primaryColor};
    font-size: 0.9rem;
    height: 1.6rem;
    padding-left: 0.75rem;
    :focus {
      outline: none;
    }
  }
  button {
    background-color: ${theme.colors.terciaryColor};
    width: 3.125rem;
    height: 1.6rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const About = styled.button`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  border-bottom: 1px solid ${theme.colors.textColor};
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    color: ${theme.colors.secondaryColor};
    border-color: ${theme.colors.secondaryColor};
  }
`;

export const Header2 = styled.div`
  width: 4%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    margin-top: 3rem;
  }
`;

export const Header3 = styled.div`
  width: 32%;
  height: 3.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;

  p {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .log-out {
    cursor: pointer;
    margin-left: 1rem;
    height: 2rem;
    width: 3rem;
  }
`;

export const Login = styled.button`
  position: relative;
  padding-right: 20px;
  margin-right: 1rem;
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  border-right: 1px solid;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.secondaryColor};
    transition: 200ms ease-in;
    border-color: ${theme.colors.textColor};
  }
  /* ::after{
    content: "";
    position: absolute;
    background-color: white;
    width: 2px;
    border-radius: .1rem;
    height: 90%;
    left: 55px;
  } */
`;

export const Register = styled.button`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  padding-left: 9px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.secondaryColor};
    transition: 200ms ease-in;
  }
`;

export const User = styled.button`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  padding-left: 9px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.secondaryColor};
    transition: 200ms ease-in;
  }
`;
