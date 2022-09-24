import * as S from "./style";
import React from "react";
import Header from "../../components/Header";

const Login = () => {
  return (
    <S.loginContainer>
      <Header />
      <S.loginContent>
        <S.loginFormContainer>
          <S.loginForm>
            <S.loginFormHeadingContainer>
              <S.loginFormHeading>FAZER LOGIN</S.loginFormHeading>
            </S.loginFormHeadingContainer>
            
          </S.loginForm>
        </S.loginFormContainer>
        <S.loginRegisterContainer />
      </S.loginContent>
    </S.loginContainer>
  );
};

export default Login;
