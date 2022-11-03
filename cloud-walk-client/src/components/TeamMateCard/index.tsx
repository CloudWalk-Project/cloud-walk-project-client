import React from "react";
import * as S from "./style";

const TeamMateCard = () => {
  return (
    <S.Card>
      {/* <S.teamMateNameContainer>
            <span>Henrique Gomes</span>
        </S.teamMateNameContainer>
        <S.teamMatePicContainer>
            <img src="https://avatars.githubusercontent.com/u/97991367?v=4" alt="" />
        </S.teamMatePicContainer>
        <S.teamMateStackContainer>
            <span> Front-End </span>
        </S.teamMateStackContainer> */}
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://avatars.githubusercontent.com/u/97991367?v=4" />
          </div>
          <div className="contentBx">
            <h2>Henrique Gomes</h2>
            <div className="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </S.Card>
  );
};

export default TeamMateCard;
