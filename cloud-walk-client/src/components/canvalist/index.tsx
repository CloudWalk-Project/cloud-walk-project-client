import * as S from "./style";
import { Canva } from "../../types/interfaces";
import CanvaCard from "../CanvaCard";
import { useEffect, useState } from "react";
import { canvaService } from "../../services/productsService";
import { Link } from "react-router-dom";


const CanvasList = () => {
  const [products,setProducts] = useState<Canva[]>([]);
  
  const getAllProducts = async ()=>{
    const response = await canvaService.getAllArts(1);
    setProducts(response.data)
  } 

  useEffect(()=>{ 
   getAllProducts()
  },[])
   
  return (
    <S.CanvasListContainer>
      {products.map((element) => (
        <Link className="product-link" to={`/product/${element.id}`}>
        <CanvaCard canva={element} key={element.id} />
        </Link>
        
      ))}
    </S.CanvasListContainer>
  );
};

export default CanvasList;
