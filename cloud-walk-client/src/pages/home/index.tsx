import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CanvaList from "../../components/Canvalist";
import { mockedCanva } from "../../mocks/canva";
import { IoIosArrowUp } from "react-icons/io";

import { BsGear } from "react-icons/bs"

import CanvaHighLights from "../../components/CanvaHighLights";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Canva } from "../../types/interfaces";
import loginService from "../../services/auth";

const Home = () => {
  
  const token = localStorage.getItem('jwt')
  
  const [loggedUserRole,setLoggedUserRole] = useState()

  const getLoggedUser = async ()=>{
    const response = await loginService.loggedUser()
    if(response.role){
      setLoggedUserRole(response.role)
    }
  }
  
  useEffect(()=>{
    if(token){
      getLoggedUser()
    }
  },[])

  let genre: string[] = mockedCanva.map((elem) => elem.genre);
  genre = genre.filter((c, index) => {
    return genre.indexOf(c) === index;
  });
 
  let categories: string[] = mockedCanva.map((elem) => elem.categoryName);
  categories = categories.filter((c, index) => {
    return categories.indexOf(c) === index;
  });
  const [filteredCanvas,setFilteredCanvas] = useState<Canva[]>(mockedCanva)
  const [filterButton1Active,setFilterButton1Active] = useState<string>("")
  const [filterButton2Active,setFilterButton2Active] = useState<string>("")
  
  const [canvaManageType,setCanvaManageType] = useState<string>("")
  const [settingsActive,setSettingsActive] = useState<string>("");
  
  const changeManageType = (type:string)=>{
    if(type==canvaManageType){
      setCanvaManageType("");
    }
    else{
      setCanvaManageType(type)
    }
  }

  const changeButton1Active = ()=>{
    if(filterButton1Active=="active"){
      setFilterButton1Active("")
    }
    else{
      setFilterButton1Active("active")
    }
  }

  const changeButton2Active = ()=>{
    if(filterButton2Active=="active"){
      setFilterButton2Active("")
    }
    else{
      setFilterButton2Active("active")
    }
  }

  const changeSettingsMode = ()=>{
    if(settingsActive=='active'){
      setSettingsActive('')
    }
    else{
      setSettingsActive('active')
    }
  }
 
  return (
    <>
      <S.home>
        <Header />
        <S.HomeContent>
          <S.HighLightsHeading>DESTAQUES</S.HighLightsHeading>
          <S.HomeHighLightsContainer>
            <CanvaHighLights></CanvaHighLights>
          </S.HomeHighLightsContainer>
          <S.listOptionsContainer>
            <S.listFiltersContainer>
              <S.filterButton onClick={changeButton1Active}>
                <S.filterNameSpan className="filter-span">
                  Categoria
                </S.filterNameSpan>
                <S.filterArrowContainer>
                  <IoIosArrowUp className="filter-icon" />
                </S.filterArrowContainer>
              </S.filterButton>
              <S.dropDownContainer className={filterButton1Active}>
                {categories.map((element) => (
                  <div
                    className=""
                  >
                    {element}
                  </div>
                ))}
              </S.dropDownContainer>
              <S.filterButton onClick={changeButton2Active}>
                <S.filterNameSpan className="filter-span">
                  Gênero
                </S.filterNameSpan>
                <S.filterArrowContainer>
                  <IoIosArrowUp className="filter-icon" />
                </S.filterArrowContainer>
              </S.filterButton>
              <S.dropDownContainer2 className={filterButton2Active}>
                {genre.map((element) => (
                  <div
                    className=""
                  >
                    {element}
                  </div>
                ))}
              </S.dropDownContainer2>
            </S.listFiltersContainer>
           {loggedUserRole=='Owner'?
            <S.adminSettingsContainer>
              <S.adminOptions className={settingsActive}>
                <S.adminOptionsSpan id="add" onClick={(event:any)=>changeManageType(event.target.id)} className={`span-add-${canvaManageType}`}>ADICIONAR</S.adminOptionsSpan>
                <S.adminOptionsSpan id="update" onClick={(event:any)=>changeManageType(event.target.id)} className={`span-update-${canvaManageType}`}>ATUALIZAR</S.adminOptionsSpan>
                <S.adminOptionsSpan id="delete" onClick={(event:any)=>changeManageType(event.target.id)} className={`span-delete-${canvaManageType}`}>DELETAR</S.adminOptionsSpan>
              </S.adminOptions>
              <S.gearContainer>
              <BsGear onClick={changeSettingsMode} className={`gear-${settingsActive} gear`}/>
              </S.gearContainer>
            </S.adminSettingsContainer>
            : ""}
          </S.listOptionsContainer>
              
          <CanvaList list={filteredCanvas}></CanvaList>
        </S.HomeContent>
        <Footer />
      </S.home>
    </>
  );
};

export default Home;
