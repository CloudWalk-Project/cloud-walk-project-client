import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CanvaList from "../../components/Canvalist";
import { mockedCanva } from "../../mocks/canva";

import CanvaHighLights from "../../components/Canvahighlights";
import { useEffect, useState } from "react";
import { Canva } from "../../types/interfaces";

const Home = () => {
  let genre: string[] = mockedCanva.map((elem) => elem.genre);
  genre = genre.filter((c, index) => {
    return genre.indexOf(c) === index;
  });

  let categories: string[] = mockedCanva.map((elem) => elem.categoryName);
  categories = categories.filter((c, index) => {
    return categories.indexOf(c) === index;
  });
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  let filteredCanvas: Canva[] =
    mockedCanva.filter((element) => element.genre === selectedGenre) ||
    mockedCanva;

  if (selectedGenre == null || selectedGenre == "") {
    filteredCanvas = mockedCanva;
  }

  filteredCanvas =
    mockedCanva.filter(
      (element) => element.categoryName === selectedCategory
    ) || mockedCanva;

  if (selectedCategory == null || selectedCategory == "") {
    filteredCanvas = mockedCanva;
  }

  return (
    <>
      <S.home>
        <Header />
        <S.HomeContent>
          <S.HighLightsHeading>DESTAQUES</S.HighLightsHeading>
          <S.HomeHighLightsContainer>
            <CanvaHighLights></CanvaHighLights>
          </S.HomeHighLightsContainer>

          <select name="GenresList" placeholder="Selecione o Genero">
            {genre.map((element) => {
              return (
                <option
                  value={element}
                  onClick={() => setSelectedGenre(element)}
                >
                  {element}
                </option>
              );
            })}
            ;
          </select>

          <select name="CategoriesList" placeholder="Selecione a Categoria">
            {categories.map((element) => {
              return (
                <option
                  value={element}
                  onClick={() => setSelectedCategory(element)}
                >
                  {element}
                </option>
              );
            })}
            ;
          </select>

          <CanvaList list={filteredCanvas}></CanvaList>
        </S.HomeContent>
        <Footer />
      </S.home>
    </>
  );
};

export default Home;
