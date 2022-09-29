import React from "react";
import * as S from "./style";
import Category from "../category";

const Manager = () => {
    return (
      <>
      <S.Heading>
          Gerenciar Categorias
          <S.Button> + </S.Button>
      </S.Heading>
        <S.Box>
            <S.Container>
              <Category/>
              <Category/>
              <Category/>
              <Category/>
            </S.Container>
        </S.Box>
      </>
    );
  };
  export default Manager;
