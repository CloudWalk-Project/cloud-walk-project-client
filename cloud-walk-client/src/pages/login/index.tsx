import * as S from "./style";
import "./style.css";

import Header from "../../components/Header";
import regImage from "./../../assets/imgs/registerImage.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginObj } from "../../types/interfaces";
import loginService from "../../services/authService";

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<loginObj>({
    email: "",
    password: "",
  });

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await loginService.login(values);
    if (response.token) {
      localStorage.setItem("jwt", response.token);
      navigate("/");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <S.loginContainer>
      <Header />
      <S.loginContent>
        <S.loginFormContainer>
          <S.loginForm onSubmit={handleLogin}>
            <S.loginFormHeadingContainer>
              <S.loginFormHeading>FAZER LOGIN</S.loginFormHeading>
            </S.loginFormHeadingContainer>
            <S.loginFormInputsContainer>
              <S.loginFormInputs>
                <S.loginFormInput
                  required
                  name="email"
                  type="text"
                  onChange={handleChanges}
                  className="login--input"
                />
                <S.loginFormInputLabel className="login-input--label">
                  E-mail
                </S.loginFormInputLabel>
              </S.loginFormInputs>
              <S.loginFormInputs>
                <S.loginFormForgotPasswordSpan>
                  Esqueceu a senha?
                </S.loginFormForgotPasswordSpan>
                <S.loginFormInput
                  required
                  name="password"
                  type="password"
                  onChange={handleChanges}
                  className="login--input"
                />
                <S.loginFormInputLabel>Password</S.loginFormInputLabel>
              </S.loginFormInputs>
            </S.loginFormInputsContainer>
            <S.loginFormSendButtonContainer>
              <S.loginFormSendButton>ENTRAR</S.loginFormSendButton>
            </S.loginFormSendButtonContainer>
          </S.loginForm>
        </S.loginFormContainer>
        <S.loginRegisterContainer>
          <S.loginRegisterFirstTextContainer>
            <S.loginRegisterFirstText>
              Não tem uma conta?
            </S.loginRegisterFirstText>
          </S.loginRegisterFirstTextContainer>
          <S.loginRegisterSecondTextContainer>
            <S.loginRegisterSecondText>
              <b>Cadastre-se</b> e tenha o <b>belo</b> vislumbre
            </S.loginRegisterSecondText>
          </S.loginRegisterSecondTextContainer>
          <S.loginRegisterThirdTextContainer>
            <S.loginRegisterThidText>de nossas artes!</S.loginRegisterThidText>
          </S.loginRegisterThirdTextContainer>
          <S.loginRegisterImageContainer>
            <S.loginRegisterImage src={regImage} />
          </S.loginRegisterImageContainer>
          <S.loginRegisterButtonContainer>
            <S.loginRegisterButton>Cadastre-se</S.loginRegisterButton>
          </S.loginRegisterButtonContainer>
        </S.loginRegisterContainer>
      </S.loginContent>
    </S.loginContainer>
  );
};

export default Login;
