import * as S from "./style";
import Icon from "../../assets/imgs/Icon.svg";
import Logo from "../../assets/imgs/Logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import loginService from "../../services/authService";
import { IoIosLogOut } from "react-icons/io"

const Header = (props:{loggedOut:Function}) => {
  

  const navigate = useNavigate();
  const location = useLocation()

  const pathName = location.pathname;

  const [token,setToken] = useState(localStorage.getItem('jwt'))
  
  const [loggedUser,setLoggedUser] = useState<any>({})

  const getLoggedUser = async ()=>{
    const response = await loginService.loggedUser()
    if(response){
      setLoggedUser(response)
    }
  }
  
  const logOut = ()=>{
    localStorage.clear()
    setToken(null)
    props.loggedOut()
  }
  
  useEffect(()=>{
    if(token){
      getLoggedUser()
    }
  },[token])

  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const goToHome = () => {
    navigate("/");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  

  return (
    <S.HeaderContainer>
      <S.Header1>
        <img onClick={goToHome}  alt="Name" src={Icon} />
          {pathName!='/login'?
        <S.SearchInputContainer>
          <form>
          <input
              id="search-input"
              type="string"
              placeholder="Procure sua arte"
            />
            <button>
              <FaSearch color="#555" />
            </button>
          </form>
        </S.SearchInputContainer>
         :
         ""  
        }
        <S.About onClick={goToAbout}>Sobre nós</S.About>
      </S.Header1>
      <S.Header2>
        <img alt="logo" src={Logo} />
      </S.Header2>
      <S.Header3>
        {
        !token?
        <>
        <S.Login onClick={goToLogin}>Entrar</S.Login>
        <S.Register>Cadastre-se</S.Register>
        </>
        :
        <>
        Bem vindo, {loggedUser.name}
        <IoIosLogOut onClick={logOut} className="log-out"/>
        </>
        }
      </S.Header3>
    </S.HeaderContainer>
  );
};

export default Header;
