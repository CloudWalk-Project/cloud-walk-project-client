import * as S from "./style";
import Camera from './../../assets/imgs/Camera.png'
import React from 'react'

const CanvaModal = (props:{type:string}) => {
  return (
    <S.CanvaModalConatiner>
      <S.CanvaModalForm>
        <S.canvaImgLabelInputContainer>
          <S.canvaImgLabelInput>
            <S.canvaCameraImg src={Camera}/>
            <S.canvaFileInput type="file"/>
          </S.canvaImgLabelInput>
        </S.canvaImgLabelInputContainer>
        <S.canvaInputsContainer>
          <S.inputLabelContainer>
            <S.canvaInput type="text" />
            <S.canvaLabel>Nome</S.canvaLabel>
          </S.inputLabelContainer>
        </S.canvaInputsContainer>
      </S.CanvaModalForm>
    </S.CanvaModalConatiner>
  )
}

export default CanvaModal