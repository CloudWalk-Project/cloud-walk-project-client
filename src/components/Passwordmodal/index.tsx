import { Dispatch, SetStateAction, useState } from "react";
import { Input, ModalOverlay } from "../../assets/styles/inputform";
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

  const handleRecoverPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.patch(`/recovery-password`, data).then(() => {
      handleOpenModal();
    });
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
