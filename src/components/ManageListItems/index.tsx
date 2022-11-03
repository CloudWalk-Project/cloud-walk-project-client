import ReactPaginate from "react-paginate";
import * as S from "./style";
import React, { useState, useEffect } from "react";
import { Canva, Category, metaObj, User } from "../../types/interfaces";
import { categoriesService } from "../../services/categoriesService";
import { toast } from "react-toastify";
import { userService } from "../../services/userService";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBack2Line } from "react-icons/ri";
import DeleteModal from "../DeleteModal";
import UserModal from "../usermodal";
import { HiViewGridAdd } from "react-icons/hi";
import UpdateRole from "../UpdateRole";
import CategoryModal from "../CategoryModal";

const ManageList = (props: { option: string }) => {
  useEffect(() => {
    if (props.option == "categories") {
      getCategories();
    } else {
      getUsers();
    }
  }, [props.option]);

  const [userModalType, setUserModalType] = useState("");
  const [userModalContent, setUserModalContent] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<any>();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [selectedCategory, setSelectedCategory] = useState<Category|undefined>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Canva | User | Category>();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [userModal,setUserModal] = useState<boolean>(false)
  const [categoryModal,setCategoryModal] = useState<boolean>(false) 
  

  const handleCreateModal = () => {
    if(props.option=='users'){
     setSelectedUser(undefined)
     setUserModal(!userModal)
    }
    else{
      setSelectedCategory(undefined)
      setCategoryModal(!categoryModal)
    }
  };

  const handleEditModal = (item: any) => {
    if (!isEditModalOpen && props.option=='users') {
      setSelectedUser(item);
      setIsEditModalOpen(!isEditModalOpen);
    }
    else if(!categoryModal && props.option=='categories'){
      setSelectedCategory(item)
      setCategoryModal(!categoryModal)
    }
  };

  const updateList = async () => {
    let response;
    if (props.option == "categories") {
      response = await categoriesService.getAllCategories(1);
      if (response.data) {
        setItems(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } else {
      response = await userService.getAllUsers();
      if (response.data) {
        setItems(response.data);
      } else {
        toast.error(response.data.message);
      }
    }
  };

  const handleOpenModal = (item: any) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const getCategories = async () => {
    setLoading(true)
    const response = await categoriesService.getAllCategories(1);
    if (response.data) {
      setItems(response.data.data);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false)
  };

  const getUsers = async () => {
    setLoading(true)
    const response = await userService.getAllUsers();
    if (response.data) {
      setItems(response.data);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false)
  };

  return (
    <>
      <S.addIconContainer className="add-icon-container">
        <HiViewGridAdd onClick={handleCreateModal} name="add" className="add" />
      </S.addIconContainer>
      <S.listContainer>
        {!loading ? (
          items?.map((item: any) => (
            <S.listItemCard>
              <S.itemCardNameContainer>
                {item.name.split(" ")[0]} {item.name.split(" ")[1]}{" "}
                {props.option == "users" ? (
                  <span> | Função: {item.role}</span>
                ) : (
                  ""
                )}
              </S.itemCardNameContainer>
              <S.itemCardManageContainer>
                <RiEdit2Fill
                  onClick={() => handleEditModal(item)}
                  className="edit-button icon"
                />
                <RiDeleteBack2Line
                  onClick={() => handleOpenModal(item)}
                  className="delete-button icon"
                />
              </S.itemCardManageContainer>
            </S.listItemCard>
          ))
        ) : (
          <S.loadingList>
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </S.loadingList>
        )}
      </S.listContainer>
      {isDeleteModalOpen ? (
        <DeleteModal
          type={props.option}
          updtList={updateList}
          item={selectedItem}
          closeModal={() => setIsDeleteModalOpen(false)}
        ></DeleteModal>
      ) : (
        ""
      )}
      {userModal ? (
        <UserModal
          updateList={updateList}
          content={userModalContent}
          type={userModalType}
          closeModal={handleCreateModal}
        />
      ) :
        categoryModal?(
        <CategoryModal updateList={updateList} closeModal={handleCreateModal} content={selectedCategory}/>
       )
       :
       ""
      }
      {isEditModalOpen  && props.option=='users'? (
        <UpdateRole
          updateList={updateList}
          closeModal={setIsEditModalOpen}
          content={selectedUser}
        />
      ) : (
        ""
      )}
     
    </>
  );
};

export default ManageList;
