import * as S from "./style";
import Camera from "./../../assets/imgs/Camera.png";
import React, { SyntheticEvent, useEffect, useState, useMemo } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  Canva,
  categoriesObj,
  createUpdateCanvaObj,
} from "../../types/interfaces";
import { canvaService } from "../../services/productsService";
import { toast } from "react-toastify";
import { uploadService } from "../../services/uploadService";

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
    image: "",
    price: 0,
    inStock: false,
  });

  const [inStock, setInStock] = useState<string>("");

  useEffect(() => {
    if (props.setCanvaContent) {
      setValues(props.setCanvaContent);
    }
  }, []);

  const handleCloseModal = () => {
    props.closeModal();
  };

  const getValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    console.log(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    let imageResponse;
    if (thumbnail) {
      formData.append("file", thumbnail[0], thumbnail[0].name);
      imageResponse = await uploadService.uploadImage(formData);
      values.image = imageResponse.data.url
    }

    if (inStock == "true") {
      values.inStock = true;
    } else {
      values.inStock = false;
      console.log(values);
    }

    let response;

    if (props.setCanvaContent == null) {
      response = await canvaService.createArt({
        ...values,
        price: Number(values.price),
      });
    } else {
      if (props.canvaId != null) {
        console.log(values.image);
        response = await canvaService.updateArt(
          {
            ...values,
            price: Number(values.price),
          },
          props.canvaId
        );
      }
    }

    console.log(response);

    if (response.data) {
      toast.success("Sucesso!");
      props.closeModal();
      props.updateList();
    } else {
      toast.error(response.response.data.message);
    }
  };

  const [thumbnail, setThumbnail] = useState<FileList | null>(null);
  let preview = useMemo(() => {
    return thumbnail
      ? URL.createObjectURL(thumbnail[0])
      : props.setCanvaContent
      ? props.setCanvaContent.image
      : null;
  }, [thumbnail]);


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
              src={
                props.setCanvaContent || thumbnail
                  ? preview?.toString()
                  : Camera
              }
              className={props.setCanvaContent || thumbnail ? "thumbnail" : ""}
            />
            <S.canvaFileInput
              onChange={(event) => setThumbnail(event.target.files)}
              type="file"
            />
          </S.canvaImgLabelInput>
        </S.canvaImgLabelInputContainer>

        <S.canvaInputsContainer>
          <S.inputLabelContainer>
            <S.canvaInput
              defaultValue={props.setCanvaContent ? values.name : ""}
              name="name"
              onChange={getValues}
              required
              type="text"
              autoComplete="off"
            />
            <S.canvaLabel>Nome</S.canvaLabel>
          </S.inputLabelContainer>

          <S.inputLabelContainer>
            <S.canvaInput
              defaultValue={
                props.setCanvaContent ? props.setCanvaContent.price : ""
              }
              name="price"
              onChange={getValues}
              required
              type="text"
              autoComplete="off"
            />
            <S.canvaLabel>Preço</S.canvaLabel>
          </S.inputLabelContainer>

          <S.inputLabelContainer>
            <S.canvaInput
              defaultValue={props.setCanvaContent ? values.categoryName : ""}
              name="categoryName"
              onChange={getValues}
              required
              list="categories"
              autoComplete="off"
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
              defaultValue={props.setCanvaContent ? values.genre : ""}
              name="genre"
              onChange={getValues}
              required
              list="genres"
              autoComplete="off"
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
            <S.canvaRadioInputContainer
              onChange={(event: any) => setInStock(event.target.value)}
            >
              <label className="radio-label">
                <input
                  name="inStock"
                  type="radio"
                  required
                  defaultChecked={props.setCanvaContent? props.setCanvaContent.inStock:false}
                  value={"true"}
                />
                Sim
              </label>
              <label className="radio-label">
                <input
                  name="inStock"
                  type="radio"
                  required
                  defaultChecked={props.setCanvaContent? !props.setCanvaContent.inStock:false}
                  value={"false"}
                />
                Não
              </label>
              <S.canvaRadioInputLabel>Em estoque?</S.canvaRadioInputLabel>
            </S.canvaRadioInputContainer>
          </S.inputLabelContainer>

          <S.inputTextAreaContainer onChange={getValues}>
            <S.canvaTextArea
              defaultValue={props.setCanvaContent ? values.description : ""}
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
