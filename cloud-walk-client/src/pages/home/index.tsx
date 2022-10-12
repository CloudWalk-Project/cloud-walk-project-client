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
import DeleteModal from "../../components/DeleteModal";

const Home = () => {
  useEffect(() => {
    if (token) {
      getLoggedUser();
    }

    getCategories();
  }, []);
  const token = localStorage.getItem("jwt");

  const [updtList, setUpdtList] = useState<boolean>(false);

  const [loggedUserRole, setLoggedUserRole] = useState<string>("");

  const [categories, setCategories] = useState<categoriesObj[]>([]);

  const getLoggedUser = async () => {
    const response = await loginService.loggedUser();
    if (response.role) {
      setLoggedUserRole(response.role);
    }
  };
  const getCategories = async () => {
    const response = await categoriesService.getAllCategories();
    setCategories(response.data.data);
  };

  const userLoggedOut = () => {
    setLoggedUserRole("");
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [canvaId,setCanvaId] = useState<number|null>(null)

  const [toUpdateCanva, setToUpdateCanva] = useState<Canva | null>(null);
  const [toDeleteCanva,setToDeleteCanva] = useState<Canva>({
    id:0,
    categoryName:"",
    description:"",
    genre:"",
    image:"",
    inStock: false,
    name:"",
    price: 0,
  })

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
    if (isModalOpen) {
      setToUpdateCanva(null);
    }
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
  };

  const updateList = () => {
    setUpdtList(!updtList);
  };

  const openUpdateModal = (canva: Canva) => {
    setToUpdateCanva(canva);
    setCanvaId(canva.id)
    handleCanvaModal();
  };
  
  const handleCanvaToDelete = (canva:Canva)=>{
    setToDeleteCanva(canva)
    handleDeleteModal()
  }

  const handleDeleteModal = ()=>{
    setIsDeleteModalOpen(!isDeleteModalOpen)
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
                <option value="Todos">Gêneros</option>
                <option value="Realism">Realism</option>
                <option value="Abstract">Abstract</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Gothic">Gothic</option>
                <option value="PopArt">PopArt</option>
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

          <CanvaList
            canvaToDelete={handleCanvaToDelete}
            openUpdtModal={openUpdateModal}
            type={canvaManageType}
            updateList={updateList}
            updtListState={updtList}
          ></CanvaList>
        </S.HomeContent>
        <Footer />
      </S.home>
      {isModalOpen ? (
        <CanvaModal
          
          canvaId={canvaId}
          setCanvaContent={toUpdateCanva}
          updateList={updateList}
          categories={categories}
          closeModal={handleCanvaModal}
          type={canvaManageType}
        ></CanvaModal>
      ) : (
        ""
      )}
      {
        isDeleteModalOpen?
        <DeleteModal
         updtList={updateList}
         closeModal={handleDeleteModal}
         item={toDeleteCanva}
        />
        :""
      }
    </>
  );
};

export default Home;
