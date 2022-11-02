import * as S from "./style";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsGear } from "react-icons/bs";
import CanvaList from "../../components/Canvalist";
import CanvaHighLights from "../../components/CanvaHighLights";
import React, { SyntheticEvent, useEffect, useState, useContext } from "react";
import { Canva, categoriesObj } from "../../types/interfaces";
import loginService from "../../services/authService";
import { canvaService } from "../../services/productsService";
import CanvaModal from "../../components/CanvaModal";
import { categoriesService } from "../../services/categoriesService";
import DeleteModal from "../../components/DeleteModal";
import { SearchContext } from "../../contexts/SearchContext";

const Home = () => {
  useEffect(() => {
    if (token) {
      getLoggedUser();
    }
    getAllProducts();
    getCategories();
  }, []);
  const token = localStorage.getItem("jwt");

  const [updtList, setUpdtList] = useState<boolean>(false);

  const [loggedUserRole, setLoggedUserRole] = useState<string>("");

  const [categories, setCategories] = useState<categoriesObj[]>([]);

  const [canvas, setCanvas] = useState<Canva[]>([]);

  const [searchItem, setSearchItem] = useState<string | undefined>();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const [canvaId, setCanvaId] = useState<number | null>(null);

  const [toUpdateCanva, setToUpdateCanva] = useState<Canva | null>(null);

  const [toDeleteCanva, setToDeleteCanva] = useState<Canva>({
    id: 0,
    categoryName: "",
    description: "",
    genre: "",
    image: "",
    inStock: false,
    name: "",
    price: 0,
  });

  const [canvaManageType, setCanvaManageType] = useState<string>("");

  const [settingsActive, setSettingsActive] = useState<string>("");

  const { handleFilterChanges, searchResult } = useContext(SearchContext);

  const [filter, setFilter] = useState({
    genre: "",
    categoryName: "",
  });

  const filterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [event.target.name]:
        event.target.value == "Categorias" || event.target.value == "Gêneros"
          ? undefined
          : event.target.value,
    });
  };

  useEffect(() => {
    handleFilterChanges(filter.genre, filter.categoryName);
  }, [filter]);

  const getLoggedUser = async () => {
    const response = await loginService.loggedUser();
    if (response.role) {
      setLoggedUserRole(response.role);
    }
  };

  const getCategories = async () => {
    const response = await categoriesService.getAllCategories(1);
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

   let genre = ['a'] 
   let categorieslist = ['a'] 

  // let genre: string[] = canvas.map((elem) => elem.genre);
  // genre = genre.filter((c, index) => {
  //   return genre.indexOf(c) === index;
  // });
  // genre = [...genre];

  // let categorieslist: string[] = categories.map((elem) => elem.name);
  // categorieslist = categorieslist.filter((c, index) => {
  //   return categorieslist.indexOf(c) === index;
  // });
  // categorieslist = [...categorieslist];

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
    setCanvaId(canva.id);
    handleCanvaModal();
  };

  const handleCanvaToDelete = (canva: Canva) => {
    setToDeleteCanva(canva);
    handleDeleteModal();
  };

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
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
              <select
                name="genre"
                defaultValue={"Gêneros"}
                onChange={(event) => filterChange(event)}
              >
                <option key={"Gêneros"} value={undefined}>
                  Gêneros
                </option>
                {genre.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
                ;
              </select>

              <select
                name="categoryName"
                defaultValue={"Categorias"}
                onChange={(event) => filterChange(event)}
              >
                <option key={"Categorias"} value={undefined}>
                  Categorias
                </option>
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

          <CanvaList
            canvaToDelete={handleCanvaToDelete}
            openUpdtModal={openUpdateModal}
            type={canvaManageType}
            updateList={updateList}
            updtListState={updtList}
            searchItem={searchItem}
          ></CanvaList>
          {/* <CanvaList list={filteredCanvas}></CanvaList> */}
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
      {isDeleteModalOpen ? (
        <DeleteModal
          type={"canva"}
          updtList={updateList}
          closeModal={handleDeleteModal}
          item={toDeleteCanva}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
