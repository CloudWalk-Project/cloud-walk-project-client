import * as S from "./style";

import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { User } from "../../types/interfaces";
import { userService } from "../../services/userService";
import { toast } from "react-toastify";

const UpdateRole = (props:{updateList:Function, content?:User , closeModal: Function}) => {

const roles = ["Owner", "SalesPerson", "Manager"];
 const [updateValues,setUpdateValues] = useState({
  role: props.content?.role
 })

 const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
   event.preventDefault();
   const response = await userService.updateRole(props.content?.id, updateValues)
   if(response.data){
    toast.success('Função Alterada!')
    props.closeModal()
   }
   else{
    toast.error(response.response.data.message)
   }
  }

  return (
    <S.updateRoleModal>
        <S.updateRoleForm onSubmit={handleSubmit}>
           <div className="close-icon-container">
            <IoCloseOutline onClick={()=>props.closeModal()} className="close-icon"/>
           </div>
        <S.headingContainer>
            <h4>Alterar função de <b> {props.content?.name.split(' ')[0]} {props.content?.name.split(' ')[1]} </b></h4>
        </S.headingContainer>
           <S.inputContainer>
           <div className="input-label-container">
            <input
              defaultValue={props.content?.role }
              onChange={(event)=>setUpdateValues({
                role: event.target.value
              })}
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
           </S.inputContainer>
           <S.sendButtonContainer>
            <button>ALTERAR</button>
           </S.sendButtonContainer>
        </S.updateRoleForm>
    </S.updateRoleModal>
  )
}

export default UpdateRole