import * as S from "./style";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsGear } from "react-icons/bs";

import CanvaList from "../../components/Canvalist";
import CanvaHighLights from "../../components/Canvahighlights";

<<<<<<< HEAD
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
=======
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
>>>>>>> home
  useEffect(() => {
    if (token) {
      getLoggedUser();
    }
<<<<<<< HEAD

=======
    getAllProducts();
>>>>>>> home
    getCategories();
  }, []);
  const token = localStorage.getItem("jwt");

<<<<<<< HEAD
  const [updtList, setUpdtList] = useState<boolean>(false);

  const [loggedUserRole, setLoggedUserRole] = useState<string>("");

  const [categories, setCategories] = useState<categoriesObj[]>([]);

=======
  const [loggedUserRole, setLoggedUserRole] = useState<string>("");
  const [canvas, setCanvas] = useState<Canva[]>([]);
  const [categories, setCategories] = useState<categoriesObj[]>([]);

  const [Searchlist, setSearchlist] = useState<Canva[]>([]);

>>>>>>> home
  const getLoggedUser = async () => {
    const response = await loginService.loggedUser();
    if (response.role) {
      setLoggedUserRole(response.role);
    }
  };
<<<<<<< HEAD
=======

>>>>>>> home
  const getCategories = async () => {
    const response = await categoriesService.getAllCategories();
    setCategories(response.data.data);
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> home

  const [selectedGenre, setSelectedGenre] = useState<string>("Todos");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

<<<<<<< HEAD
=======
  // let filteredCanvas: Canva[] = canvas;
  let [filteredCanvas, setfilteredCanvas] = useState<Canva[]>([]);

  // const handleChange = async () => {
  //   if (
  //     selectedGenre == null ||
  //     selectedGenre == "" ||
  //     selectedGenre == "Todos"
  //   ) {
  //     if (
  //       selectedCategory == null ||
  //       selectedCategory == "" ||
  //       selectedCategory == "Todos"
  //     ) {
  //       filteredCanvas = canvas;
  //     } else {
  //       filteredCanvas = canvas.filter(
  //         (element) => element.categoryName === selectedCategory
  //       );
  //     }
  //   } else {
  //     if (
  //       selectedCategory == null ||
  //       selectedCategory == "" ||
  //       selectedCategory == "Todos"
  //     ) {
  //       filteredCanvas = canvas.filter(
  //         (element) => element.genre === selectedGenre
  //       );
  //     } else {
  //       filteredCanvas = canvas.filter(
  //         (element) => element.genre === selectedGenre
  //       );
  //       filteredCanvas = filteredCanvas.filter(
  //         (element) => element.categoryName === selectedCategory
  //       );
  //     }
  //   }
  //   // console.log(selectedGenre);
  //   // console.log(filteredCanvas);
  // };

  // useEffect(() => {
  //   handleChange();
  // }, [selectedGenre]);
  // useEffect(() => {
  //   handleChange();
  // }, [selectedCategory]);

  useEffect(() => {
    setfilteredCanvas(Searchlist);
  }, [Searchlist]);

>>>>>>> home
  const ChangeGenre = (event: any) => {
    setSelectedGenre(event.target.value);
  };
  const ChangeCategory = (event: any) => {
    setSelectedCategory(event.target.value);
  };
<<<<<<< HEAD
=======

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [canvaManageType, setCanvaManageType] = useState<string>("");
  const [settingsActive, setSettingsActive] = useState<string>("");

>>>>>>> home
  const changeManageType = (type: string) => {
    if (type == canvaManageType) {
      setCanvaManageType("");
    } else {
      setCanvaManageType(type);
    }
  };
<<<<<<< HEAD

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
=======

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
        <Header setSearchlist={setSearchlist} />
>>>>>>> home
        <S.HomeContent>
          {Searchlist.length == 0 ? (
            <>
              <S.HighLightsHeading>DESTAQUES</S.HighLightsHeading>
              <S.HomeHighLightsContainer>
                <CanvaHighLights></CanvaHighLights>
              </S.HomeHighLightsContainer>
            </>
          ) : (
            ""
          )}

          <S.listOptionsContainer>
            <S.listFiltersContainer>
<<<<<<< HEAD
              <select value={selectedCategory} onChange={ChangeCategory}>
                <option key="Todos" value="Todos">
                  Categorias
                </option>
                {categories.map((element) => {
                  return (
                    <option key={element.id} value={element.name}>
                      {element.name}
=======
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
>>>>>>> home
                    </option>
                  );
                })}
                ;
              </select>
<<<<<<< HEAD

              <select value={selectedGenre} onChange={ChangeGenre}>
                <option value="Todos">Gêneros</option>
                <option value="Realism">Realism</option>
                <option value="Abstract">Abstract</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Gothic">Gothic</option>
                <option value="PopArt">PopArt</option>
              </select>
            </S.listFiltersContainer>
=======
            </S.listFiltersContainer>

>>>>>>> home
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

<<<<<<< HEAD
          <CanvaList
            canvaToDelete={handleCanvaToDelete}
            openUpdtModal={openUpdateModal}
            type={canvaManageType}
            updateList={updateList}
            updtListState={updtList}
          ></CanvaList>
=======
          <CanvaList list={filteredCanvas}></CanvaList>
>>>>>>> home
        </S.HomeContent>
        <Footer />
      </S.home>
      {isModalOpen ? (
        <CanvaModal
<<<<<<< HEAD
          
          canvaId={canvaId}
          setCanvaContent={toUpdateCanva}
          updateList={updateList}
=======
>>>>>>> home
          categories={categories}
          closeModal={handleCanvaModal}
          type={canvaManageType}
        ></CanvaModal>
      ) : (
        ""
      )}
<<<<<<< HEAD
      {
        isDeleteModalOpen?
        <DeleteModal
         updtList={updateList}
         closeModal={handleDeleteModal}
         item={toDeleteCanva}
        />
        :""
      }
=======
>>>>>>> home
    </>
  );
};

export default Home;
