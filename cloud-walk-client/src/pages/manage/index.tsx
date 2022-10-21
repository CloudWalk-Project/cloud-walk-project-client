import * as S from "./style";
import Header from "../../components/Header";

const Manage = () => {
  return (
    <S.Manage>
      <Header />
      <S.manageContent>
        <S.manageListHolder>
          <h1>Gerenciamento</h1>
          <S.listHeader>
            <div className="list-options">
              <button className="categories"> Categorias </button>
              <button className="users"> Usuários </button>
            </div>
          </S.listHeader>
        </S.manageListHolder>
      </S.manageContent>
    </S.Manage>
  );
};

export default Manage;
