import * as S from "./style";
import { Canva, metaObj } from "../../types/interfaces";
import CanvaCard from "../CanvaCard";
import { useEffect, useState } from "react";
import { canvaService } from "../../services/productsService";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const CanvasList = (props: {
  updtListState: boolean;
  updateList: Function;
}) => {
  const [products, setProducts] = useState<Canva[]>([]);
  const [metaData,setMetaData] = useState<metaObj>({
    hasNextPage: false,
    hasPreviousPage: false,
    itemCount: 10,
    orderByColumn: 'id',
    page: 1,
    pageCount: 0,
    take: 20,
  })

  const getAllProducts = async (page:number) => {
    const response = await canvaService.getAllArts(page);
    setMetaData(response.meta)
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
    getAllProducts(page)
  };

  return (
    <>
      <S.CanvasListContainer>
        {products.length > 0
          ? products.map((element) => (
              <Link
                key={`product-${element.id}-link`}
                className="product-link"
                to={`/product/${element.id}`}
              >
                <CanvaCard canva={element} key={element.id} />
              </Link>
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
