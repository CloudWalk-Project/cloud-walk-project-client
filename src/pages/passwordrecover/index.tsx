import * as S from "./style";
import * as React from "react";

import Header from "../../components/Header";
import Button from "../../components/button";
import { useParams, useNavigate } from "react-router";
import { api } from "../../services/api";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface update {
  password: any;
  confirmPassword: any;
  recoverPasswordToken?: string;
}

const Password = () => {
  const token = useParams().id;
  const navigate = useNavigate();

  console.log(token);

  const [data, setdata] = useState<update>({
    password: "",
    confirmPassword: "",
    recoverPasswordToken: token?.toString(),
  });

  const handleUserUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await api
      .patch(`update_password`, data)
      .then((response) => response)
      .catch((error) => error);

    if (response.data) {
      navigate("/login");
      toast.success("Senha atualizada com sucesso.");
    } else {
      toast.error("Não foi possível atualizar a senha.");
    }
  };

  function handleChange(evt: any) {
    const value = evt.target.value;
    console.log(value);
    setdata({
      ...data,
      [evt.target.name]: value,
    });
  }

  return (
    <S.PasswordContainer>
      <Header />
      <S.PasswordForm>
        <S.PasswordFormHeading>
          Bem vindo, insira sua nova senha:
        </S.PasswordFormHeading>
        <S.PasswordFormInputsContainer
          onSubmit={(event: any) => handleUserUpdate(event)}
        >
          <S.PasswordInputFather>
            <S.PasswordFormInput
              required
              name="password"
              type="password"
              className="login--input"
              value={data.password}
              onChange={handleChange}
            />
            <S.PasswordFormInputLabel>Senha</S.PasswordFormInputLabel>
          </S.PasswordInputFather>
          <S.PasswordInputFather>
            <S.PasswordFormInput
              required
              name="confirmPassword"
              type="password"
              className="login--input"
              value={data.confirmPassword}
              onChange={handleChange}
            />
            <S.PasswordFormInputLabel>Confirmar Senha</S.PasswordFormInputLabel>
          </S.PasswordInputFather>
          <S.Token value={data.recoverPasswordToken} type="hidden" />
          <S.PasswordFormSendButton>
            <Button text="Enviar" type="submit" />
          </S.PasswordFormSendButton>
        </S.PasswordFormInputsContainer>
      </S.PasswordForm>
    </S.PasswordContainer>
  );
};

export default Password;
