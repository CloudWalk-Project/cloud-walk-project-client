import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsGear } from "react-icons/bs";

import CanvaList from "../../components/Canvalist";
import CanvaHighLights from "../../components/Canvahighlights";

import React, { SyntheticEvent, useEffect, useState } from "react";
import { Canva, categoriesObj } from "../../types/interfaces";

import loginService from "../../service/authService";
import { canvaService } from "../../service/canvaService";
import CanvaModal from "../../components/Canvamodal";
import { categoriesService } from "../../service/categoriesService";

import { useCanvas } from "../../contexts/canvas";
import { useUsers } from "../../contexts/users";

const Home = () => {
  // Connecting:
  useEffect(() => {
    if (token) {
      getLoggedUser();
    }
    getAllProducts();
    getCategories();
  }, []);
  const token = localStorage.getItem("jwt");

  const [loggedUserRole, setLoggedUserRole] = useState<string>("");
  const [canvas, setCanvas] = useState<Canva[]>([]);

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

  const getAllProducts = async () => {
    const response = await canvaService.getAllArts(1);
    setCanvas(response.data);
  };

  const userLoggedOut = () => {
    setLoggedUserRole("");
    console.log(loggedUserRole);
  };

  // const { canvas } = useCanvas();
  // const { user } = useUsers();

  let genre: string[] = canvas.map((elem) => elem.genre);
  genre = genre.filter((c, index) => {
    return genre.indexOf(c) === index;
  });
  genre = ["Todos", ...genre];

  let categorieslist: string[] = canvas.map((elem) => elem.categoryName);
  categorieslist = categorieslist.filter((c, index) => {
    return categorieslist.indexOf(c) === index;
  });
  categorieslist = ["Todos", ...categorieslist];

  const [selectedGenre, setSelectedGenre] = useState<string>("Todos");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  let filteredCanvas: Canva[] = canvas;

  const handleChange = async () => {
    if (
      selectedGenre == null ||
      selectedGenre == "" ||
      selectedGenre == "Todos"
    ) {
      if (
        selectedCategory == null ||
        selectedCategory == "" ||
        selectedCategory == "Todos"
      ) {
        filteredCanvas = canvas;
      } else {
        filteredCanvas = canvas.filter(
          (element) => element.categoryName === selectedCategory
        );
      }
    } else {
      if (
        selectedCategory == null ||
        selectedCategory == "" ||
        selectedCategory == "Todos"
      ) {
        filteredCanvas = canvas.filter(
          (element) => element.genre === selectedGenre
        );
      } else {
        filteredCanvas = canvas.filter(
          (element) => element.genre === selectedGenre
        );
        filteredCanvas = filteredCanvas.filter(
          (element) => element.categoryName === selectedCategory
        );
      }
    }
    // console.log(selectedGenre);
    // console.log(filteredCanvas);
  };

  useEffect(() => {
    handleChange();
  }, [selectedGenre]);
  useEffect(() => {
    handleChange();
  }, [selectedCategory]);

  const ChangeGenre = (event: any) => {
    setSelectedGenre(event.target.value);
  };
  const ChangeCategory = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [canvaManageType, setCanvaManageType] = useState<string>("");
  const [settingsActive, setSettingsActive] = useState<string>("");

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
        <Header />
        <S.HomeContent>
          <S.HighLightsHeading>DESTAQUES</S.HighLightsHeading>
          <S.HomeHighLightsContainer>
            <CanvaHighLights></CanvaHighLights>
          </S.HomeHighLightsContainer>
          <S.listOptionsContainer>
            <S.listFiltersContainer>
              <select value={selectedGenre} onChange={ChangeGenre}>
                {genre.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
                ;
              </select>

              <select value={selectedCategory} onChange={ChangeCategory}>
                {categorieslist.map((element) => {
                  return (
                    <option key={element} value={element}>
                      {element}
                    </option>
                  );
                })}
                ;
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

          <CanvaList list={filteredCanvas}></CanvaList>
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
