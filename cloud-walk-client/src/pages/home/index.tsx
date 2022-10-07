import * as S from "./style";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CanvaList from "../../components/Canvalist";
import { mockedCanva } from "../../mocks/canva";
import { IoIosArrowUp } from "react-icons/io";

import { BsGear } from "react-icons/bs";

import CanvaHighLights from "../../components/CanvaHighLights";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Canva, categoriesObj } from "../../types/interfaces";
import loginService from "../../services/authService";
import { canvaService } from "../../services/productsService";
import CanvaModal from "../../components/CanvaModal";
import { categoriesService } from "../../services/categoriesService";

const Home = () => {
  useEffect(() => {
    if (token) {
      getLoggedUser();
    }
    getAllProducts();
    getCategories();
  }, []);
  const token = localStorage.getItem("jwt");

  const [loggedUserRole, setLoggedUserRole] = useState<string>("");
  const [products, setProducts] = useState<Canva[]>([]);

  
  const [categories,setCategories] = useState<categoriesObj[]>([]);
  
  const getLoggedUser = async () => {
    const response = await loginService.loggedUser();
    if (response.role) {
      setLoggedUserRole(response.role);
    }
  };
  const getCategories = async ()=>{
    const response = await categoriesService.getAllCategories();
  setCategories(response.data.data)
}

  const getAllProducts = async () => {
    const response = await canvaService.getAllArts(1);
    setProducts(response.data);
  };

  const userLoggedOut = () => {
    setLoggedUserRole("");
    console.log(loggedUserRole);
  };



  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [canvaManageType, setCanvaManageType] = useState<string>("");
  const [settingsActive, setSettingsActive] = useState<string>("");

  const [selectedGenre, setSelectedGenre] = useState<string>("Todos");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const ChangeGenre = (event: any) => {
    setSelectedGenre(event.target.value);
  };
  const ChangeCategory = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  const changeManageType = (type: string) => {
    if (type == canvaManageType) {
      setCanvaManageType("");
    } else {
      setCanvaManageType(type);
    }
  };

  const handleCanvaModal = () => {
    setIsModalOpen(!isModalOpen);
    changeManageType("");
  };

  const changeSettingsMode = () => {
    if (settingsActive == "active") {
      setSettingsActive("");
    } else {
      setSettingsActive("active");
    }
  };

  const handleManageActions = (type: string) => {
    changeManageType(type);
    handleCanvaModal();
    console.log(isModalOpen);
  };

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
                <option key="Todos" value="Todos">
                  Categorias
                </option>
                {categories.map((element) => {
                  return (
                    <option key={element.id} value={element.name}>
                      {element.name}
                    </option>
                  );
                })}
                ;
              </select>

              <select value={selectedGenre} onChange={ChangeGenre}>
                <option  value="Todos">
                  Gêneros
                </option>
                <option value="Realism" >
                  Realism
                </option>
                <option value="Abstract" >
                 Abstract
                </option>
                <option value="Fantasy" >
                 Fantasy
                </option>
                <option value="Gothic" >
                 Gothic
                </option>
                <option value="PopArt" >
                 PopArt
                </option>
              </select>
            </S.listFiltersContainer>
            {loggedUserRole == "Owner" ? (
              <S.adminSettingsContainer>
                <S.adminOptions className={settingsActive}>
                  <S.adminOptionsSpan
                    id="add"
                    onClick={(event: any) =>
                      handleManageActions(event.target.id)
                    }
                    className={`span-add-${canvaManageType}`}
                  >
                    ADICIONAR
                  </S.adminOptionsSpan>
                  <S.adminOptionsSpan
                    id="update"
                    onClick={(event: any) => changeManageType(event.target.id)}
                    className={`span-update-${canvaManageType}`}
                  >
                    ATUALIZAR
                  </S.adminOptionsSpan>
                  <S.adminOptionsSpan
                    id="delete"
                    onClick={(event: any) => changeManageType(event.target.id)}
                    className={`span-delete-${canvaManageType}`}
                  >
                    DELETAR
                  </S.adminOptionsSpan>
                </S.adminOptions>
                <S.gearContainer>
                  <BsGear
                    onClick={changeSettingsMode}
                    className={`gear-${settingsActive} gear`}
                  />
                </S.gearContainer>
              </S.adminSettingsContainer>
            ) : (
              ""
            )}
          </S.listOptionsContainer>

          <CanvaList></CanvaList>
        </S.HomeContent>
        <Footer />
      </S.home>
      {isModalOpen ? (
        <CanvaModal
          categories={categories}
          closeModal={handleCanvaModal}
          type={canvaManageType}
        ></CanvaModal>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
