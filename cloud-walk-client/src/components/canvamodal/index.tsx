import * as S from "./style";
import Camera from "./../../assets/imgs/Camera.png";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  Canva,
  categoriesObj,
  createUpdateCanvaObj,
} from "../../types/interfaces";
import { categoriesService } from "../../services/categoriesService";
import { canvaService } from "../../services/productsService";
import { toast } from "react-toastify";

const CanvaModal = (props: {
  categories: categoriesObj[];
  type: string;
  closeModal: Function;
  updateList: Function;
  setCanvaContent: Canva | null;
  canvaId: number | null;
}) => {
  const [values, setValues] = useState<createUpdateCanvaObj>({
    name: "",
    categoryName: "",
    description: "",
    genre: "",
    image:
      "https://s2.glbimg.com/SkyLTd6VJy8WiUMg5L6EeUwgyMw=/0x0:620x548/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/B/t/limPwzQmSeI4WJO7haZg/2012-08-15-mf1.jpg",
    price: 0,
    inStock: false,
  });

  useEffect(() => {
    if (props.setCanvaContent) {
      setValues(props.setCanvaContent);
    }
    console.log(props.type);
  }, []);

  const [inStockConv, setInStockConv] = useState<string>("");

  const handleCloseModal = () => {
    props.closeModal();
  };

  const getValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inStockConv == "Sim") {
      values.inStock = true;
    } else {
      values.inStock = false;
    }

    let response;

    if (props.setCanvaContent == null) {
      response = await canvaService.createArt({
        ...values,
        price: Number(values.price),
      });
    } else {
      if (props.canvaId != null) {
        response = await canvaService.updateArt(
          {
            ...values,
            price: Number(values.price),
          },
          props.canvaId
        );
      }
      console.log(values);
      console.log(response);
    }

    if (response.data) {
      toast.success("Sucesso!");
      props.closeModal();
      props.updateList();
    } else {
      toast.error(response.response.data.message);
    }
  };

  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
    if (checkedTwo) {
      setCheckedTwo(!checkedTwo);
    }
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    if (checkedOne) {
      setCheckedOne(!checkedOne);
    }
  };

  return (
    <S.CanvaModalConatiner>
      <S.CanvaModalForm onSubmit={handleSubmit}>
        <S.modalCloseIconContainer>
          <IoCloseOutline
            onClick={handleCloseModal}
            className="close-icon"
          ></IoCloseOutline>
        </S.modalCloseIconContainer>
        <S.canvaImgLabelInputContainer>
          <S.canvaImgLabelInput>
            <S.canvaCameraImg
              src={props.setCanvaContent ? values.image : Camera}
              className={props.setCanvaContent ? "thumbnail" : ""}
            />
            <S.canvaFileInput type="file" />
          </S.canvaImgLabelInput>
        </S.canvaImgLabelInputContainer>

        <S.canvaInputsContainer>
          <S.inputLabelContainer>
            <S.canvaInput
              value={props.setCanvaContent ? values.name : values.name}
              name="name"
              onChange={getValues}
              required
              type="text"
            />
            <S.canvaLabel>Nome</S.canvaLabel>
          </S.inputLabelContainer>

          <S.inputLabelContainer>
            <S.canvaInput
              value={props.setCanvaContent ? values.price : values.price}
              name="price"
              onChange={getValues}
              required
              type="text"
            />
            <S.canvaLabel>Preço</S.canvaLabel>
          </S.inputLabelContainer>

          <S.inputLabelContainer>
            <S.canvaInput
              value={
                props.setCanvaContent
                  ? values.categoryName
                  : values.categoryName
              }
              name="categoryName"
              onChange={getValues}
              required
              list="categories"
            />
            <S.canvaListInput id="categories">
              {props.categories.map((category) => (
                <option value={category.name} />
              ))}
            </S.canvaListInput>
            <S.canvaLabel>Categoria</S.canvaLabel>
          </S.inputLabelContainer>

          <S.inputLabelContainer>
            <S.canvaInput
              value={props.setCanvaContent ? values.genre : values.genre}
              name="genre"
              onChange={getValues}
              required
              list="genres"
            />
            <S.canvaListInput id="genres">
              <option value="Realism" />
              <option value="Abstract" />
              <option value="Fantasy" />
              <option value="Gothic" />
              <option value="PopArt" />
            </S.canvaListInput>
            <S.canvaLabel>Gênero</S.canvaLabel>
          </S.inputLabelContainer>

          <S.inputLabelContainer>
            <S.canvaListInput id="inStock">
              <label>
                <input
                  name="group1"
                  type="radio"
                  checked={checkedOne}
                  onChange={handleChangeOne}
                />
                Sim
              </label>
              <label>
                <input
                  name="group1"
                  type="radio"
                  checked={checkedTwo}
                  onChange={handleChangeTwo}
                />
                Não
              </label>
            </S.canvaListInput>
            <S.canvaLabel>Em estoque?</S.canvaLabel>
          </S.inputLabelContainer>

          <S.inputTextAreaContainer onChange={getValues}>
            <S.canvaTextArea
              value={
                props.setCanvaContent ? values.description : values.description
              }
              name="description"
              required
            />
            <S.canvaTextAreaLabel>Descrição</S.canvaTextAreaLabel>
          </S.inputTextAreaContainer>
        </S.canvaInputsContainer>
        <S.sendButtonContainer>
          <S.sendButton>ENVIAR</S.sendButton>
        </S.sendButtonContainer>
      </S.CanvaModalForm>
    </S.CanvaModalConatiner>
  );
};

export default CanvaModal;
