import * as S from "./style";
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CanvaList from "../../components/Canvalist";
import { mockedCanva } from "../../mocks/canva";
import { IoIosArrowUp } from "react-icons/io";

import { BsGear } from "react-icons/bs"

import CanvaHighLights from "../../components/CanvaHighLights";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Canva } from "../../types/interfaces";
import loginService from "../../services/authService";
import { canvaService } from "../../services/productsService";

const Home = () => {
  
  useEffect(()=>{
    if(token){
      getLoggedUser()
    }
  getAllProducts();
  },[])
  const token = localStorage.getItem('jwt')
  
  const [loggedUserRole,setLoggedUserRole] = useState<string>('')
  const [products,setProducts] = useState<Canva[]>([])

  const getLoggedUser = async ()=>{
    const response = await loginService.loggedUser()
    if(response.role){
      setLoggedUserRole(response.role)
    }
  }

  const getAllProducts = async ()=>{
    const response = await canvaService.getAllArts(1);
    setProducts(response.data);
  } 
  
  const userLoggedOut = () =>{
    setLoggedUserRole('') 
    console.log(loggedUserRole)
  }
 
  let genre: string[] = products.map((elem) => elem.genre);
  genre = genre.filter((c, index) => {
    return genre.indexOf(c) === index;
  });
  
  let categories: string[] = products.map((elem) => elem.categoryName);
  categories = categories.filter((c, index) => {
    return categories.indexOf(c) === index;
  });
  
  const [filterButton1Active,setFilterButton1Active] = useState<string>("")
  const [filterButton2Active,setFilterButton2Active] = useState<string>("")
  
  const [canvaManageType,setCanvaManageType] = useState<string>("")
  const [settingsActive,setSettingsActive] = useState<string>("");
  
  const [selectedGenre, setSelectedGenre] = useState<string>("Todos");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const ChangeGenre = (event: any) => {
    setSelectedGenre(event.target.value);
  };
  const ChangeCategory = (event: any) => {
    setSelectedCategory(event.target.value);
  };
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
        <Header loggedOut={userLoggedOut} />
        <S.HomeContent>
          <S.HighLightsHeading>DESTAQUES</S.HighLightsHeading>
          <S.HomeHighLightsContainer>
            <CanvaHighLights></CanvaHighLights>
          </S.HomeHighLightsContainer>
          <S.listOptionsContainer>
            <S.listFiltersContainer>

          <select value={selectedCategory} onChange={ChangeCategory}>
          <option key='Todos' value='Todos'>
                Categorias
              </option>
            {categories.map((element) => {
              return (
                <option key={element} value={element}>
                  {element}
                </option>
              );
            })}
            ;
            </select>
           
            <select value={selectedGenre} onChange={ChangeGenre}>
            <option key='Todos' value='Todos'>
                Gêneros
              </option>
            {genre.map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
            ;
          </select>
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
              
          <CanvaList></CanvaList>
        </S.HomeContent>
        <Footer />
      </S.home>
    </>
  );
};

export default Home;
