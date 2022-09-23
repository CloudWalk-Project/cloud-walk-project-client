import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  // const navigate = useNavigate();

  const [searchInputValue, setSearchInputValue] = useState<string>("");

  // const handlehome = () => {
  //   navigate("/");
  // };

  // const handlecanvas = () => {
  //   navigate("/canvas");
  // };

  // const handlesettings = () => {
  //   navigate("/settings");
  // };

  return (
    <header>
      <S.HeaderContainer>
        <S.TitleContainer>
          <h1>I.Arte</h1>
        </S.TitleContainer>
        <S.SearchContainer>
          <S.SearchInputContainer>
            <form>
              <input
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
              />
              <button>
                <FaSearch color="#555" />
              </button>
            </form>
          </S.SearchInputContainer>
        </S.SearchContainer>
      </S.HeaderContainer>
    </header>
  );
};

export default Header;
