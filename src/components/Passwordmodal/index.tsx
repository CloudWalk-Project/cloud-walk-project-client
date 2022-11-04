import { toNamespacedPath } from "node:path/win32";
import { Dispatch, SetStateAction, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  ErrorMessage,
  Input,
  ModalOverlay,
} from "../../assets/styles/inputform";
import { api } from "../../services/api";
import Button from "../button";
import { PasswordModalContainer } from "./style";

interface PasswordRecoverModalProps {
  handleOpenModal: () => void;
}

interface NewPasswordData {
  email: string;
}

const RecoverPasswordModal = ({
  handleOpenModal,
}: PasswordRecoverModalProps) => {
  const [data, setdata] = useState<NewPasswordData>({
    email: "",
  });

  const handleRecoverPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const response = await api
      .patch(`/recovery-password`, data)
      .then((response) => response)
      .catch((error) => error);

    console.log(response);

    if (response.data) {
      handleOpenModal();
      toast.success("Enviado e-mail com sucesso.");
    } else {
      toast.error("Não conseguiu enviar email.");
    }
  };

  return (
    <ModalOverlay>
      <PasswordModalContainer
        onSubmit={(event: any) => handleRecoverPassword(event)}
      >
        <h2>Recuperar Senha</h2>
        <div>
          <Input
            onChange={(event: any) => setdata({ email: event.target.value })}
            placeholder="Email do usuário"
          />
        </div>
        <div>
          <Button
            onClick={() => {
              handleOpenModal();
            }}
            text="Cancelar"
            variant="cancel"
          />
          <Button text="Enviar" type="submit" />
        </div>
      </PasswordModalContainer>
    </ModalOverlay>
  );
};

export default RecoverPasswordModal;
// onClick={handleRecoverPassword}
