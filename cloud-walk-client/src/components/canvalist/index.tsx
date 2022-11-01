import * as S from "./style";
import { Canva, metaObj } from "../../types/interfaces";
import CanvaCard from "../CanvaCard";
import { useEffect, useState, useContext } from "react";
import { canvaService } from "../../services/productsService";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { SearchContext } from "../../contexts/SearchContext";

const CanvasList = (props: {
  updtListState: boolean;
  updateList: Function;
  type: string;
  openUpdtModal: Function;
  canvaToDelete: Function;
  searchItem:string|undefined;
}) => {
  
 const { metaData, searchResult, nextPage } = useContext(SearchContext)

  useEffect(() => {
    // getAllProducts(1);
  }, [props.updtListState]);
  
  const handleClick = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1;
    nextPage(page)
  };


  return (
    <>
      <S.CanvasListContainer>
        {searchResult.length > 0 && props.type == ""
          ? searchResult.map((element) => (
              <Link
                key={`product-${element.id}-link`}
                className="product-link"
                to={`/product/${element.id}`}
              >
                <CanvaCard type={props.type} canva={element} key={element.id} />
              </Link>
            ))
          : searchResult.length > 0 && props.type == "update"
          ? searchResult.map((element) => (
              <div
                className="updt-mode-container"
                onClick={() => props.openUpdtModal(element)}
              >
                <CanvaCard type={props.type} canva={element} key={element.id} />
              </div>
            ))
          : searchResult.length > 0 && props.type == "delete"
          ? searchResult.map((element) => (
              <div
                className="updt-mode-container"
                onClick={() => props.canvaToDelete(element)}
              >
                <CanvaCard type={props.type} canva={element} key={element.id} />
              </div>
            ))
          : ""}

      <S.PaginationContainer>
        <ReactPaginate
          pageCount={metaData? metaData.pageCount : 0}
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
      </S.CanvasListContainer>
    </>
  );
};

export default CanvasList;
