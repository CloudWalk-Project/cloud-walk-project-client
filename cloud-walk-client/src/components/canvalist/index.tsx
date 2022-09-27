import * as S from "./style";
import { Canva } from "../../types/interfaces";
import CanvaCard from "../Canvacard";

interface CanvasListProps {
  list: Canva[];
}

const CanvasList = ({ list }: CanvasListProps) => {
  return (
    <S.CanvasListContainer>
      {list.map((element) => (
        <CanvaCard canva={element} key={element.id} />
      ))}
    </S.CanvasListContainer>
  );
};

export default CanvasList;
