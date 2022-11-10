import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import * as S from "./style";
import example from './../../assets/imgs/exExcel.png'
import { uploadService } from "../../services/uploadService";
import { toast } from "react-toastify";

const BatchUpdateModal = (props:{updtList:Function, closemodal:Function}) => {
  const [batchUpdt,setBatchUpdt] = useState<FileList|null>(null)

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const formData = new FormData();
    if(batchUpdt){
      formData.append("file", batchUpdt[0], batchUpdt[0].name);
      const response = await uploadService.batchUpdateUpload(formData)
      if(response.data){
       toast.success('Sucesso!') 
       props.closemodal()
       props.updtList()
      }
      else{
       toast.error(response.response.data.message)
       props.closemodal()
      }
    }
  }
  return (
    <S.batchUpdtModalContainer>
      <S.modalForm onSubmit={handleSubmit}>
        <div className="close-icon-container">
          <IoCloseOutline onClick={()=>props.closemodal()} className="icon" />
        </div>
        <h1>ATENÇÃO</h1>
        <S.batchInfoContainer>
          <p>
            Para o funcionamento da <b>atualização em massa</b> o arquivo
            enviado deve ser no formato <b>CSV</b> e a estruturação do arquivo
            deve conter as informações <b>iguais as demonstradas na imagem</b>.
          </p>
          <S.exampleContainer>
            <img src={example} alt="" />
          </S.exampleContainer>
        </S.batchInfoContainer>
        <S.sendButtonContainer>
          <input required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setBatchUpdt(e.target.files)}} type='file'></input>
          <button>ENVIAR</button>
        </S.sendButtonContainer>
      </S.modalForm>
    </S.batchUpdtModalContainer>
  );
};

export default BatchUpdateModal;
