import * as S from "./style";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Category } from "../../types/interfaces";
import { categoriesService } from "../../services/categoriesService";

const CategoryModal = (props: {
  content?: Category;
  closeModal: Function;
  updateList: Function;
}) => {
  const [content, setContent] = useState<Category>({
    name: props.content ? props.content.name : "",
    price: props.content ? props.content.price : 0,
    cost: props.content ? props.content.cost : 0,
    description: props.content ? props.content.description : "",
  });

  const handleChanges = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent({
      ...content,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response;
    if (props.content) {
      response = await categoriesService.updateCategory(
        Number(props.content.id),
        { ...content, price: Number(content.price), cost: Number(content.cost) }
      );
    } else {
      response = await categoriesService.createCategory(
        { ...content, price: Number(content.price), cost: Number(content.cost) }
      );
    }
  };

  return (
    <S.categoryModal>
      <S.categoryForm>
        <div className="close-icon-container">
          <IoCloseOutline
            onClick={() => props.closeModal()}
            className="close-icon"
          />
        </div>
        <div className="heading-container">
          <h1>{props.content ? "Atualizar" : "Adicionar"} categoria</h1>
        </div>
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
              defaultValue={props.content ? props.content.price : ""}
              onChange={handleChanges}
              name="price"
              required
              type="text"
            />
            <label htmlFor="">Preço mínimo</label>
          </div>
          <div className="input-label-container">
            <input
              defaultValue={props.content ? props.content.cost : ""}
              onChange={handleChanges}
              name="cost"
              required
              type="text"
            />
            <label htmlFor="">Custo de produção</label>
          </div>
          <div className="text-area-label-container">
            <textarea
              onChange={handleChanges}
              defaultValue={props.content ? props.content.description : ""}
              name="description"
              required
            />
            <label htmlFor="">Descrição</label>
          </div>
        </S.inputsMainContainer>
        <S.sendButtonContainer>
          <button>ENVIAR</button>
        </S.sendButtonContainer>
      </S.categoryForm>
    </S.categoryModal>
  );
};

export default CategoryModal;
