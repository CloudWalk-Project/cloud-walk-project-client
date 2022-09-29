import * as S from "./style";
import Camera from "./../../assets/imgs/Camera.png";
import React from "react";
import { IoCloseOutline } from 'react-icons/io5'

const CanvaModal = (props: { type: string }) => {
  return (
    <S.CanvaModalConatiner>
      <S.CanvaModalForm>
      <S.modalCloseIconContainer>
       <IoCloseOutline className="close-icon"></IoCloseOutline>
      </S.modalCloseIconContainer>
        <S.canvaImgLabelInputContainer>
          <S.canvaImgLabelInput>
            <S.canvaCameraImg src={Camera} />
            <S.canvaFileInput type="file" />
          </S.canvaImgLabelInput>
        </S.canvaImgLabelInputContainer>
        <S.canvaInputsContainer>
          <S.inputLabelContainer>
            <S.canvaInput required type="text" />
            <S.canvaLabel>Nome</S.canvaLabel>
          </S.inputLabelContainer>
          <S.inputLabelContainer>
            <S.canvaInput required type="text" />
            <S.canvaLabel>Preço</S.canvaLabel>
          </S.inputLabelContainer>
          <S.inputLabelContainer>
            <S.canvaInput required list="categories"/>
            <S.canvaListInput id="categories">
              <option value="Quadro"/>
              <option value="Quadro-pequeno"/>
              <option value="Papel de parede"/>
              <option value="Banner"/>
            </S.canvaListInput>
            <S.canvaLabel>Categoria</S.canvaLabel>
          </S.inputLabelContainer>
          <S.inputLabelContainer>
            <S.canvaInput required type="text" />
            <S.canvaLabel>Gênero da arte</S.canvaLabel>
          </S.inputLabelContainer>
          <S.inputTextAreaContainer>
            <S.canvaTextArea required />
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
