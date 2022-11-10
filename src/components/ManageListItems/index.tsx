import * as S from "./style";
import React, { useState, useEffect } from "react";
import { Canva, Category, metaObj, User } from "../../types/interfaces";
import { categoriesService } from "../../services/categoriesService";
import { toast } from "react-toastify";
import { userService } from "../../services/userService";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBack2Line } from "react-icons/ri";
import DeleteModal from "../DeleteModal";
import UserModal from "../UserModal";
import { HiViewGridAdd } from "react-icons/hi";
import UpdateRole from "../UpdateRole";
import CategoryModal from "../CategoryModal";
import { batchUpdt } from "../../mocks/batchUpdt";
import { FaEye } from "react-icons/fa";
import BatchUpdateModal from "../BatchUpdateModal";
import { uploadService } from "../../services/uploadService";
import { useNavigate } from "react-router-dom";

const ManageList = (props: { option: string }) => {
  useEffect(() => {
    if (props.option == "categories") {
      getCategories();
    } else if (props.option == "users") {
      getUsers();
    } else if (props.option == "att") {
      getBatches();
    }
  }, [props.option]);

  const [userModalType, setUserModalType] = useState("");
  const [userModalContent, setUserModalContent] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<any>();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Canva | User | Category>();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);
  const [batchModal, setBatchModal] = useState<boolean>(false);
  const navigate = useNavigate()

  const handleCreateModal = () => {
    if (props.option == "users") {
      setSelectedUser(undefined);
      setUserModal(!userModal);
    } else if (props.option == "categories") {
      setSelectedCategory(undefined);
      setCategoryModal(!categoryModal);
    } else if (props.option == "att") {
      setBatchModal(!batchModal);
    }
  };

  const handleEditModal = (item: any) => {
    if (!isEditModalOpen && props.option == "users") {
      setSelectedUser(item);
      setIsEditModalOpen(!isEditModalOpen);
    } else if (!categoryModal && props.option == "categories") {
      setSelectedCategory(item);
      setCategoryModal(!categoryModal);
    }
  };

  const updateList = async () => {
    setLoading(true)
    let response;
    if (props.option == "categories") {
      response = await categoriesService.getAllCategories(1);
      if (response.data) {
        setItems(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } else if (props.option == "users") {
      response = await userService.getAllUsers();
      if (response.data) {
        setItems(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } else if (props.option == "att") {
      response = await uploadService.getAllBacthes();
      if (response.data) {
        setItems(response.data);
      } else {
        toast.error(response.data.message);
      }
    }
  
    setLoading(false)
  };

  const handleOpenModal = (item: any) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const getCategories = async () => {
    setLoading(true);
    const response = await categoriesService.getAllCategories(1);
    if (response.data) {
      setItems(response.data.data);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const getUsers = async () => {
    setLoading(true);
    const response = await userService.getAllUsers();
    if (response.data) {
      setItems(response.data);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const getBatches = async () => {
    setLoading(true);
    const response = await uploadService.getAllBacthes();
    console.log(response.data[0].user);
    if (response.data) {
      setItems(response.data);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const goToReport = (id:number) =>{
    navigate(`/report/${id}`)
  }

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
                {item.user
                  ? `${item.user.name}`
                  : `${item.name.split(" ")[0]} ${
                      item.name.split(" ")[1] ? item.name.split(" ")[1] : ""
                    }`}
                {props.option == "users" ? (
                  <span> | Função: {item.role}</span>
                ) : props.option == "att" ? (
                  <span> | Data: {item.createdAt.split("T")[0]}</span>
                ) : (
                  ""
                )}
              </S.itemCardNameContainer>

              <S.itemCardManageContainer>
                {props.option != "att" ? (
                  <>
                    <RiEdit2Fill
                      onClick={() => handleEditModal(item)}
                      className="edit-button icon"
                    />
                    <RiDeleteBack2Line
                      onClick={() => handleOpenModal(item)}
                      className="delete-button icon"
                    />
                  </>
                ) : (
                  <FaEye onClick={()=>goToReport(item.id)} className="info-button icon" />
                )}
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
      ) : categoryModal ? (
        <CategoryModal
          updateList={updateList}
          closeModal={handleCreateModal}
          content={selectedCategory}
        />
      ) : (
        ""
      )}
      {isEditModalOpen && props.option == "users" ? (
        <UpdateRole
          updateList={updateList}
          closeModal={setIsEditModalOpen}
          content={selectedUser}
        />
      ) : (
        ""
      )}
      {batchModal ? (
        <BatchUpdateModal
          updtList={updateList}
          closemodal={() => setBatchModal(!batchModal)}
        ></BatchUpdateModal>
      ) : (
        ""
      )}
    </>
  );
};

export default ManageList;
