import * as S from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import empresa from "../../assets/imgs/CloudWalkSlogan.png";
import "./style.css";
import TeamMateCard from "../../components/TeamMateCard";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
const About = () => {
  const teamMates = [
    {
      name: "Daniel Vinhas",
      image: "https://avatars.githubusercontent.com/u/95504029?v=4",
      git: "https://github.com/vinhas93",
      link: "https://www.linkedin.com/in/vinhasdaniel/",
      stack: "Back-end (Scrum Master - Domador de MVPS)",
      bio: `Poucas coisas na vida são tão gratificantes quanto o desenvolvimento pessoal. Adquirir novos conhecimentos, buscar maiores desafios e adaptar o comportamento, são primordiais nessa jornada infinita.

      Não é um processo linear, sempre haverão momentos em que veremos a necessidade de voltar alguns passos para reestruturar os planos.`,
    },
    {
      name: "Wanderson Santos",
      image: "https://avatars.githubusercontent.com/u/81826043?v=4",
      git: "https://github.com/wandersonDeve",
      link: "https://www.linkedin.com/in/wandersongsantos/",
      stack: "Back-end (Destruidor de Bugs)",
      bio: "",
    },
    {
      name: "Marcelo Santos",
      image: "https://avatars.githubusercontent.com/u/81837448?v=4",
      git: "https://github.com/DJMarshallSantos",
      link: "https://www.linkedin.com/in/marcelo-a-santos-76141b85/",
      stack: "Back-end (Desbravador de Testes)",
      bio: "",
    },
    {
      name: "Henrique Gomes",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEN2crn7v5tNQ/profile-displayphoto-shrink_200_200/0/1657803823402?e=1672876800&v=beta&t=0JqCJyxtZhEu2BLqhZrA7w4M0pnN_8ZSR92MkUWPSQ4",
      git: "https://github.com/Henriqueggperes",
      link: "https://www.linkedin.com/in/henriqueggp-48931422a/",
      stack: "Front-end (Product Owner - Oráculo dos MVPS )",
      bio: "",
    },
    {
      name: "Amaro Francisco",
      image: "https://avatars.githubusercontent.com/u/88009922?v=4",
      git: "https://github.com/Amaro13",
      link: "https://www.linkedin.com/in/amaroribeiro/",
      stack: "Front-end (Forjador de Wireframes)",
      bio: "",
    },
    {
      name: "Paulo Gabriel",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFr2UK9Yhpo2w/profile-displayphoto-shrink_200_200/0/1652917767513?e=1672876800&v=beta&t=mbLBNZc-Mj0feUZcvDxGKQzQhGg9dXFPJadADXFxmZs",
      git: "https://github.com/PauloGLemos",
      link: "https://www.linkedin.com/in/pauloglemos/",
      stack: "Front-end (Artesão de Componnents)",
      bio: "",
    },
  ];

  const heigth = window.innerHeight;
  const handleScroll = (param: number) => {
    param++;
    console.log("OI");
    scrollTo({ behavior: "smooth", top: heigth * param });
  };

  return (
    <>
      <Header getSearchContent={()=>{}} />
      <S.About className="body">
        <S.introduction>
          <div className="box">
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
          <div className="intro-text-container">
            <div className="heading-container">
              <h1>O projeto </h1>
            </div>
            <div className="text-holder">
              <p>
                O projeto I.Arte, é o fruto de um projeto oferecido pelo
                Bootcamp da instituição BlueEdtech e pela empresa CloudWalk.
              </p>
              <p>
                Nosso projeto foi idealizado como um gerenciador de um
                e-commerce de artes geradas por uma inteligência artificial, e
                dentro desse tema, aplicamos diversos recursos para o
                gerenciamento das entidades da nossa aplicação. Sendo possível o
                gerenciamento de produtos, categorias e usuários e também uma
                forma de atualização em massa.
              </p>
            </div>
            <div className="team-container">
              <h1>Integrantes</h1>
              <div className="teamMates-holder">
                {teamMates.map((item, index) => (
                  <a href={`#${index}`}>
                    <div key={index} className="teamMate-card">
                      <span>{item.name}</span>
                      <img src={item.image}></img>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </S.introduction>
        {teamMates.map((item, index) => (
          <S.teamMateSection>
            <div className="info-container">
              <div className="info">
                <p className="bio">{item.bio}</p>
                <div className="contact">
                  <a href={item.git} className="git-container" target="_blank">
                    <AiFillGithub className="git" />
                    {item.git}
                  </a>
                  <a
                    href={item.link}
                    className="linkedin-container"
                    target="_blank"
                  >
                    <AiOutlineLinkedin className="linkedin" />
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
            <div id={index.toString()} className="image-container">
              <img src={item.image} alt="" />
              <span>{item.stack}</span>
            </div>
          </S.teamMateSection>
        ))}
      </S.About>
    </>
  );
};

export default About;
