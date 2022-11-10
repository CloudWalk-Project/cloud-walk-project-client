import * as S from "./style";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import { HiViewGridAdd } from "react-icons/hi"
import loginService from "../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/interfaces";
import ManageList from "../../components/ManageListItems";

const Manage = () => {
  const jwt = localStorage.getItem('jwt')
  const navigate = useNavigate()
  let userRole:string;
  useEffect(()=>{
    getLoggedUser()
  },[])
 
  const getLoggedUser = async () => {
    const response = await loginService.loggedUser();
    userRole = response.role
    if(!jwt||userRole!="Owner"){
      toast.error('Acesso negado.')
      navigate("/")
    }
  };
  
  const [listOption,setListOption] = useState<string>('categories')
 
  const handleListOptions = (event:any)=>{
     setListOption(event.target.name)
 } 
  
  return (
    <S.Manage>
      <Header/>
      <S.manageContent>
        <S.manageListHolder>
          <h1>Gerenciamento</h1>
          <S.listHeader>
            <div className="list-options">
              <button onClick={(event)=>handleListOptions(event)} className={`list-categoryOP-${listOption}`} name="categories"> Categorias </button>
              <button onClick={(event)=>handleListOptions(event)} className={`list-userOP-${listOption}`} name="users"> Usuários </button>
              <button onClick={(event)=>handleListOptions(event)} className={`list-attOP-${listOption}`} name="att"> Atts. Em Massa </button>
            </div>
          </S.listHeader>
          <S.manageList>
            <ManageList  option={listOption}/>
          </S.manageList>
        </S.manageListHolder>
      </S.manageContent>
    </S.Manage>
  );
};

export default Manage;
