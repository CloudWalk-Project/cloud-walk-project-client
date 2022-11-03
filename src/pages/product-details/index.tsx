import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { canvaService } from "../../services/productsService";
import { Canva, Category } from "../../types/interfaces";
import { categoriesService } from "../../services/categoriesService";

const Product = () => {
  const params = useParams();
  const id = params.id;

  useEffect(()=>{
   getProduct()
  },[])

  const [product,setProduct] = useState<Canva>()  
  const [category,setCategory] = useState<Category>()
  const [conditionalName,setConditionalName] = useState<any>()
  
  const getProduct = async ()=>{
    const response =  await canvaService.getArtById(Number(id))
    setProduct(response.data)
    getCategory(response.data.categoryName)
    setConditionalName(response.data.name.split(" "))
  }

  const getCategory = async(name:string)=>{
    const response = await categoriesService.getOneCategory(name)
    setCategory(response.data)
  }

  return (
    <S.Product>
      <Header />
      <S.center>
        <S.Left>
          <div className="left-name-heading">
           <h1 className={conditionalName?.length > 1? "big-name" : ""}>"{product?.name}"</h1>
          </div>
          <S.canvaImageContainer>
            <S.canvaImage src={product?.image}/>
          </S.canvaImageContainer>
        </S.Left>
        <S.Right>
          <h1>{category?.name}</h1>
          <span>{category?.description}</span>
          <S.canvaInfoContainer>
            <h1>"{product?.name}"</h1>
            <span>{product?.description}</span>
            <h2>R${product?.price}</h2>
          </S.canvaInfoContainer>
          <S.BtnAlign>
            <S.Btn>ADICIONAR AO CART</S.Btn>
            <S.Btn>COMPRAR AGORA</S.Btn>
          </S.BtnAlign>
        </S.Right>
      </S.center>
      {/* <Footer /> */}
    </S.Product>
  );
};

export default Product;