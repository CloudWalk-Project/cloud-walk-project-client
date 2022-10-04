import * as S from "./style";
import Icon from "../../assets/imgs/Icon.svg";
import Logo from "../../assets/imgs/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import loginService from "../../services/auth";
import { IoIosLogOut } from "react-icons/io"

const Header = () => {
  const navigate = useNavigate();

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
  }
  
  useEffect(()=>{
    if(token){
      getLoggedUser()
    }
  },[token])

  const [searchInputValue, setSearchInputValue] = useState<string>("");

  // const handlehome = () => {
  //   navigate("/");
  // };

  const handleabout = () => {
    navigate("/about");
  };

  // const handlesettings = () => {
  //   navigate("/settings");
  // };

  return (
    <S.HeaderContainer>
      <S.Header1>
        {/* <p>
          <IoMdMenu color="#fff" size="2rem" />
        </p> */}
        <img alt="Name" src={Icon} />
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
        <S.About>Sobre nós</S.About>
      </S.Header1>
      <S.Header2>
        <img alt="logo" src={Logo} />
      </S.Header2>
      <S.Header3>
        {
        !token?
        <>
        <S.Login>Entrar</S.Login>
        <p>|</p>
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
