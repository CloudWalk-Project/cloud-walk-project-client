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
  genre = ["Todos", ...genre];

  let categories: string[] = mockedCanva.map((elem) => elem.categoryName);
  categories = categories.filter((c, index) => {
    return categories.indexOf(c) === index;
  });
  categories = ["Todos", ...categories];

  const [selectedGenre, setSelectedGenre] = useState<string>("Todos");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  let filteredCanvas: Canva[] = mockedCanva;

  const handleChange = async () => {
    if (
      selectedGenre == null ||
      selectedGenre == "" ||
      selectedGenre == "Todos"
    ) {
      if (
        selectedCategory == null ||
        selectedCategory == "" ||
        selectedCategory == "Todos"
      ) {
        filteredCanvas = mockedCanva;
      } else {
        filteredCanvas = mockedCanva.filter(
          (element) => element.categoryName === selectedCategory
        );
      }
    } else {
      if (
        selectedCategory == null ||
        selectedCategory == "" ||
        selectedCategory == "Todos"
      ) {
        console.log(selectedGenre);
        filteredCanvas = mockedCanva.filter(
          (element) => element.genre === selectedGenre
        );
        console.log(filteredCanvas);
      } else {
        console.log(selectedGenre);
        filteredCanvas = mockedCanva.filter(
          (element) => element.genre === selectedGenre
        );
        filteredCanvas = filteredCanvas.filter(
          (element) => element.categoryName === selectedCategory
        );
      }
    }
  };

  useEffect(() => {
    handleChange();
  }, [selectedGenre]);
  useEffect(() => {
    handleChange();
  }, [selectedCategory]);

  const ChangeGenre = (event: any) => {
    setSelectedGenre(event.target.value);
  };
  const ChangeCategory = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <S.home>
        <Header />
        <S.HomeContent>
          <S.HighLightsHeading>DESTAQUES</S.HighLightsHeading>
          <S.HomeHighLightsContainer>
            <CanvaHighLights></CanvaHighLights>
          </S.HomeHighLightsContainer>

          <select value={selectedGenre} onChange={ChangeGenre}>
            {genre.map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
            ;
          </select>

          <select value={selectedCategory} onChange={ChangeCategory}>
            {categories.map((element) => {
              return (
                <option key={element} value={element}>
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
