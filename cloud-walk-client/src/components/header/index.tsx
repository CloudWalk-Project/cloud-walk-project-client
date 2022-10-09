import * as S from "./style";
import Icon from "../../assets/imgs/Icon.svg";
import Logo from "../../assets/imgs/Logo.svg";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../contexts/auth";
import loginService from "../../service/authService";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
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
    <S.HeaderContainer>
      <S.Header1>
        <img alt="Name" src={Icon} onClick={handlehome} />
        <S.SearchInputContainer>
          <form>
            <input
              id="search-input"
              type="string"
              placeholder="Procure sua arte"
            />
            <button className="search-button" onClick={handlehome}>
              <FaSearch color="#555" />
            </button>
          </form>
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
  );
};

export default Header;

// const findPaletById = async () => {
//   const input = document.getElementById("search-input").value;
//   const paletsorigin = await fetch(`${baseUrl}/all-palets`);
//   const allpalets = await paletsorigin.json();
//   const selectedpalet = allpalets.find((elem) => elem.flavor == input);
//   const id = selectedpalet._id;

//   if (id == "" || id == undefined) {
//     localStorage.setItem("message", "Insert palet to search");
//     localStorage.setItem("type", "danger");

//     showMessageAlert();
//   }
//   const response = await fetch(`${baseUrl}/palet/${id}`);

//   const palet = await response.json();
//   console.log(palet.message);

//   if (palet.message != undefined) {
//     localStorage.setItem("message", palet.message);
//     localStorage.setItem("type", "danger");

//     showMessageAlert();
//   } else {
//     localStorage.setItem("message", "Success");
//     localStorage.setItem("type", "success");

//     showMessageAlert();
//   }

//   document.querySelector(".list-all").style.display = "block";
//   document.querySelector(".PaletList").style.display = "none";

//   const ChoosenPaletDiv = document.getElementById("choosenpalet");
//   ChoosenPaletDiv.innerHTML = `<div class="PaletCardItem">
//     <div>
//       <div class="PaletCardItem__flavor">${palet.flavor}</div>
//       <div class="PaletCardItem__price">R$ ${palet.price.toFixed(2)}</div>
//       <div class="PaletCardItem__description">${palet.description}</div>

//       <div class="PaletListItem__actions Actions">
//           <button class="Actions__edit btn" onclick="openModal('${
//             palet._id
//           }')">Edit</button>
//           <button class="Actions__delete btn" onclick="openDeleteModal('${
//             palet._id
//           }')">Delete</button>
//       </div>

//     </div>
//       <img class="PaletCardItem__photo" src=${
//         palet.photo
//       } alt=${`Palet of ${palet.flavor}`} />
//   </div>`;
// };
