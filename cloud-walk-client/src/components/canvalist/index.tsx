import * as S from "./style";
import { Canva, metaObj } from "../../types/interfaces";
import CanvaCard from "../CanvaCard";
import { useEffect, useState } from "react";
import { canvaService } from "../../services/productsService";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import CanvaModal from "../CanvaModal";
import { listFiltersContainer } from "../../pages/home/style";

const CanvasList = (props: {
  updtListState: boolean;
  updateList: Function;
  type: string;
  openUpdtModal: Function;
  canvaToDelete: Function;
  list: Canva[];
}) => {
  const [products, setProducts] = useState<Canva[]>([]);
  const [metaData, setMetaData] = useState<metaObj>({
    hasNextPage: false,
    hasPreviousPage: false,
    itemCount: 10,
    orderByColumn: "id",
    page: 1,
    pageCount: 0,
    take: 20,
  });

  const getAllProducts = async (page: number) => {
    const response = await canvaService.getAllArts(page);
    setMetaData(response.meta);
    if (response.data) {
      setProducts(response.data);
    }
    if (props.updtListState) {
      props.updateList();
    }
  };

  useEffect(() => {
    getAllProducts(1);
  }, []);

  useEffect(() => {
    getAllProducts(1);
  }, [props.updtListState]);

  const handleClick = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1;
    getAllProducts(page);
  };

  useEffect(() => {
    if (props.list.length > 0) {
      setProducts(props.list);
    }
  }, [props.list]);

  return (
    <>
      <S.CanvasListContainer>
        {products.length > 0 && props.type == ""
          ? products.map((element) => (
              <Link
                key={`product-${element.id}-link`}
                className="product-link"
                to={`/product/${element.id}`}
              >
                <CanvaCard type={props.type} canva={element} key={element.id} />
              </Link>
            ))
          : products.length > 0 && props.type == "update"
          ? products.map((element) => (
              <div
                className="updt-mode-container"
                onClick={() => props.openUpdtModal(element)}
              >
                <CanvaCard type={props.type} canva={element} key={element.id} />
              </div>
            ))
          : products.length > 0 && props.type == "delete"
          ? products.map((element) => (
              <div
                className="updt-mode-container"
                onClick={() => props.canvaToDelete(element)}
              >
                <CanvaCard type={props.type} canva={element} key={element.id} />
              </div>
            ))
          : ""}
      </S.CanvasListContainer>
      <S.PaginationContainer>
        <ReactPaginate
          pageCount={metaData.pageCount}
          nextLabel={">"}
          previousLabel={"<"}
          breakLabel={"..."}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={(selectedItem: { selected: number }) =>
            handleClick(selectedItem)
          }
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </S.PaginationContainer>
    </>
  );
};

export default CanvasList;
