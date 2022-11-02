import * as S from "./style";

import Header from "../../components/Header";
import Button from "../../components/button";

const Password = () => {
  const user = "Amaro";
  const password = "banana";

  return (
    <S.PasswordContainer>
      <Header />
      <S.PasswordForm>
        <S.PasswordFormHeading>
          Bem vindo {user}, insira sua nova senha:
        </S.PasswordFormHeading>
        <S.PasswordFormInputsContainer>
          <S.PasswordInputFather>
            <S.PasswordFormInput
              required
              name="password"
              type="password"
              className="login--input"
            />
            <S.PasswordFormInputLabel>Senha</S.PasswordFormInputLabel>
          </S.PasswordInputFather>
          <S.PasswordInputFather>
            <S.PasswordFormInput
              required
              name="password"
              type="password"
              className="login--input"
            />
            <S.PasswordFormInputLabel>Confirmar Senha</S.PasswordFormInputLabel>
          </S.PasswordInputFather>
          <S.PasswordFormSendButton>
            <Button text="Enviar" type="submit" />
          </S.PasswordFormSendButton>
        </S.PasswordFormInputsContainer>
      </S.PasswordForm>
    </S.PasswordContainer>
  );
};

export default Password;
