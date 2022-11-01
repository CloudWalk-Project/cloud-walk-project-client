import * as S from "./style";
import { IoCloseOutline } from "react-icons/io5";
import Camera from "./../../assets/imgs/Camera.png";
import { useMemo, useState } from "react";
import { createUpdateUser, User } from "../../types/interfaces";
import { userService } from "../../services/userService";
import { toast } from "react-toastify";
import { uploadService } from "../../services/uploadService";

const UserModal = (props: {
  content?: User;
  type: string;
  closeModal: Function;
  updateList:Function;
}) => {
  const roles = ["Owner", "SalesPerson", "Manager"];
  const [values, setValues] = useState<createUpdateUser>({
    name: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [thumbnail, setThumbnail] = useState<FileList | null>();
  let preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail[0]) : null;
  }, [thumbnail]);

  const setImage = (event:any)=>{
    console.log(event.length)
    if(event.length > 0){
      setThumbnail(event)
    }
  }

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (thumbnail) {
      formData.append("file", thumbnail[0], thumbnail[0].name);
      const imageResponse = await uploadService.uploadImage(formData);
      values.image = imageResponse.data.url
    }
    
    let response = await userService.createUser(values);
    if (response.data) {
      toast.success("Sucesso!");
      props.updateList();
      props.closeModal();
    } else {
      console.log(response.response.data.message);
      toast.error(`Erro: ${response.response.data.message}`);
      props.closeModal();
    }
  };

  return (
    <S.userModalContainer>
      <S.userModalForm onSubmit={handleSubmit}>
        <S.closeModalIconContainer>
          <IoCloseOutline
            onClick={() => props.closeModal()}
            className="close-icon"
          />
        </S.closeModalIconContainer>
        <S.imageInputContainer>
          <label>
            <img
              className={preview ? "thumbnail" : ""}
              src={preview ? preview : Camera}
              alt="Icone de câmera clicável para adicionar uma imagem do usuário"
            />
            <input
              onChange={(event) => setImage(event.target.files)}
              type="file"
            />
          </label>
        </S.imageInputContainer>
        <S.inputsMainContainer>
          <div className="input-label-container">
            <input
              defaultValue={props.content ? props.content.name : ""}
              onChange={handleChanges}
              name="name"
              required
              type="text"
            />
            <label htmlFor="">Nome</label>
          </div>
          <div className="input-label-container">
            <input
              defaultValue={props.content ? props.content.email : ""}
              onChange={handleChanges}
              name="email"
              required
              type="email"
            />
            <label htmlFor="">E-mail</label>
          </div>
          <div className="input-label-container">
            <input
              defaultValue={props.content ? props.content.role : ""}
              onChange={handleChanges}
              autoComplete="off"
              required
              list="role"
              name="role"
            />
            <datalist id="role">
              {roles.map((item) => (
                <option key={item} value={item} />
              ))}
            </datalist>
            <label htmlFor="">Função</label>
          </div>
          <div className="input-label-container">
            <input
              onChange={handleChanges}
              name="password"
              required
              type="password"
            />
            <label htmlFor="">Senha</label>
          </div>
          <div className="input-label-container">
            <input
              onChange={handleChanges}
              name="confirmPassword"
              required
              type="password"
            />
            <label htmlFor="">Confirmar senha</label>
          </div>
        </S.inputsMainContainer>
        <S.submitButtonContainer>
          <button> ENVIAR </button>
        </S.submitButtonContainer>
      </S.userModalForm>
    </S.userModalContainer>
  );
};

export default UserModal;
