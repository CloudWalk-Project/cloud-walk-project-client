import * as S from './style'
import React from 'react'
import { Canva, Category, User } from '../../types/interfaces'
import { canvaService } from '../../services/productsService'
import { toast } from 'react-toastify'
import { categoriesService } from '../../services/categoriesService'
import { userService } from '../../services/userService'

/* props:{closeModal:Function,item:Canva}
item posteriormente será dinamico para receber varios tipos
de item a serem deletados(users, canvas e categories)
*/
const DeleteModal = (props:{type:string, closeModal:Function,item:any,updtList:Function}) => {
 
 const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  let response ;
  switch(props.type){
  case "canva":
    response =  await canvaService.deleteArt(props.item.id)
    break;
  case "categories":
    response = await categoriesService.deleteCategory(props.item.id) 
    break;
  case "users":
   response = await userService.deleteUser(props.item.id)
  }
  console.log(response.status)
  props.updtList()
  props.closeModal()
  if(response.status==200){
    toast.success('Deletado com sucesso!')
  }
  else{
    toast.error(response.response.data.message)
  }
 }    
  
 return (
   <S.deleteModalMainContainer>
    <S.deleteModalForm onSubmit={(event)=>handleSubmit(event)}>
        <S.modalInfoContainer>
            <S.modalInfo> Tem certeza que deseja <b>EXCLUIR</b></S.modalInfo>
            <S.modalInfo> <b className='to-delete-item'>{props.item.name} </b> da aplicação?</S.modalInfo>
        </S.modalInfoContainer>
        <S.modalButtonsContainer>
            <S.modalButton onClick={()=>props.closeModal()} className='cancel-button'>CANCELAR</S.modalButton>
            <S.modalButton className='delete-button'>EXCLUIR</S.modalButton>
        </S.modalButtonsContainer>
    </S.deleteModalForm>
   </S.deleteModalMainContainer>
  )
}

export default DeleteModal