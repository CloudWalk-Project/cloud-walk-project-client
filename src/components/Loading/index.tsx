import React from "react";
import * as S from "./style";

const Loading = () => {
  return (
    <S.loadingList>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.loadingList>
  );
};

export default Loading;
