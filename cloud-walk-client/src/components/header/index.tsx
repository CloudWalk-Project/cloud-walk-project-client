import * as S from "./style";
import Icon from "../../assets/imgs/Icon.svg";
import Logo from "../../assets/imgs/Logo.svg";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../contexts/auth";
import loginService from "../../service/authService";
import { canvaService } from "../../service/canvaService";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import React from "react";
import { Canva } from "../../types/interfaces";
import CanvaList from "../Canvalist";

const Header = ({ setSearchlist }) => {
  // const [canvas, setCanvas] = useState<Canva[]>([]);
  const [name, setName] = useState("");

  const search = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await canvaService.searchArt(name);
    setSearchlist(response.data);
  };

  const navigate = useNavigate();
  const { logged } = useAuth();

  const handlehome = () => {
    navigate("/");
  };

  const handleabout = () => {
    navigate("/about");
  };

  const handlelogin = () => {
    navigate("/login");
  };

  const [loggedUser, setLoggedUser] = useState<any>({});
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  const getLoggedUser = async () => {
    const response = await loginService.loggedUser();
    if (response) {
      setLoggedUser(response);
    }
  };

  const logOut = () => {
    localStorage.clear();
    setToken(null);
    setLoggedUser(null);
  };

  useEffect(() => {
    if (token) {
      getLoggedUser();
    }
  }, [token]);

  return (
    <div>
      <S.HeaderContainer>
        <S.Header1>
          <img alt="Name" src={Icon} onClick={handlehome} />
          <S.SearchInputContainer onSubmit={search}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Procure sua arte"
            />
            <button className="search-button" type="submit">
              <FaSearch color="#555" />
            </button>
          </S.SearchInputContainer>
          <S.About onClick={handleabout}>Sobre nós</S.About>
        </S.Header1>
        <S.Header2>
          <img alt="logo" src={Logo} />
        </S.Header2>
        <S.Header3>
          {!token ? (
            <>
              <S.Login onClick={handlelogin}>Entrar</S.Login>
              <S.Register>Cadastre-se</S.Register>
            </>
          ) : (
            <>
              Bem vindo, {loggedUser.name}
              <S.User>
                <IoIosLogOut onClick={logOut} className="log-out" />
              </S.User>
            </>
          )}
        </S.Header3>
      </S.HeaderContainer>
      {/* {canvas ? (
        <>
          <CanvaList list={canvas}></CanvaList>
        </>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Header;
