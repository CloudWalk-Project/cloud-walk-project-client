import * as S from "./style";
import "./style.css";
import Header from "../../components/Header";
import regImage from "./../../assets/imgs/registerImage.png";

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
            <S.loginFormInputsContainer>
              <S.loginFormInputs>
                <S.loginFormInput
                  required
                  type="text"
                  className="login--input" /*onChange={}*/
                />
                <S.loginFormInputLabel className="login-input--label">
                  Username
                </S.loginFormInputLabel>
              </S.loginFormInputs>
              <S.loginFormInputs>
                <S.loginFormForgotPasswordSpan>
                  Esqueceu a senha?
                </S.loginFormForgotPasswordSpan>
                <S.loginFormInput
                  required
                  type="password"
                  className="login--input" /*onChange={}*/
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
            <S.loginRegisterImage src={regImage}/>
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
