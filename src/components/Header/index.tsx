import * as S from './style'
import Icon from "../../assets/imgs/Icon.svg";
import Logo from "../../assets/imgs/Logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import loginService from "../../services/authService";
import { IoIosLogOut } from "react-icons/io";
import { SearchContext } from "../../contexts/SearchContext";


const Header = (props: { loggedOut?: Function;  }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathName = location.pathname;
 
  const { handleSubmit, clearResult } = useContext(SearchContext)

  const [token, setToken] = useState(localStorage.getItem("jwt"));
  
  const [loggedUser, setLoggedUser] = useState<any>({});
  
  const [searchContent,setSearchContent] = useState<string>("")

  const getLoggedUser = async () => {
    const response = await loginService.loggedUser();
    if (response) {
      setLoggedUser(response);
    }
  };
  
    const search = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmit(searchContent)
    };

  const logOut = () => {
    localStorage.clear();
    setToken(null);
    setLoggedUser({})
    if(props.loggedOut){
      props.loggedOut();
    }
    goToHome()
  };

  useEffect(() => {
    if (token) {
      getLoggedUser();
    }
  }, [token]);

  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const goToHome = () => {
    navigate("/");
    clearResult()
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToManage = () => {
    navigate("/manage");
  };

  return (
    <S.HeaderContainer>
      <S.Header1>
        <img onClick={goToHome} alt="Name" src={Icon} />
        {pathName == "/" ? (
          <S.SearchInputContainer onSubmit={search}>
            <input
              type="text"
              required
              onChange={(e) => setSearchContent(e.target.value)}
              placeholder="Procure sua arte"
            />
            <button className="search-button" type="submit">
              <FaSearch color="#555" />
            </button>
          </S.SearchInputContainer>
        ) : (
          ""
        )}
        <S.About onClick={goToAbout}>Sobre nós</S.About>
        {loggedUser.role == 'Owner'?
          <S.Manage onClick={goToManage}> Gerenciamento </S.Manage>
          : ""
        }
      </S.Header1>
      <S.Header2>
        <img alt="logo" src={Logo} />
      </S.Header2>
      <S.Header3>
        {!token ? (
          <>
            <S.Login onClick={goToLogin}>Entrar</S.Login>
            <S.Register>Cadastre-se</S.Register>
          </>
        ) : (
          <>
            Bem vindo, {loggedUser.name}
            <IoIosLogOut onClick={logOut} className="log-out" />
          </>
        )}
      </S.Header3>
    </S.HeaderContainer>
  );
};

export default Header;
