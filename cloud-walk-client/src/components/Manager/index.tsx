import React from "react";
import * as S from "./style";
import Category from "../category";

const Manager = () => {
    return (
      <S.center>

        <S.Heading>
            Gerenciar Categorias
            <S.Button> + </S.Button>
        </S.Heading>

      <S.centerbutton>
        <S.ButtonPage1>Categorias</S.ButtonPage1>
        <S.ButtonPage1>Usuarios</S.ButtonPage1>
      </S.centerbutton>

          <S.Box>
              <S.Container>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
              </S.Container>
          </S.Box>

        </S.center>
    );
  };
  export default Manager;
