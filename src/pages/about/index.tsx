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
      bio: `
      Sou um profissional da área de TI, com o objetivo de construir soluções integradas para a sociedade através da tecnologia 👨🏼‍💻.
      
      Cursando graduação em Análise e Desenvolvimento de Sistemas, capacitação em Desenvolvimento Web BackEnd e diversos cursos livres relacionados a soft e hard skills 📚📖📚.`,
    },
    {
      name: "Wanderson Santos",
      image: "https://avatars.githubusercontent.com/u/81826043?v=4",
      git: "https://github.com/wandersonDeve",
      link: "https://www.linkedin.com/in/wandersongsantos/",
      stack: "Back-end (Destruidor de Bugs)",
      bio: `Sou Desenvolvedor de software backend NodeJs.

      Possuo os seguintes conhecimentos:
      -Linguagens -> Javascript, Typescript, Python
      -Banco de dados -> MariaDB, MySQL, PostgreSQL, MongoDb`,
    },
    {
      name: "Marcelo Santos",
      image: "https://avatars.githubusercontent.com/u/81837448?v=4",
      git: "https://github.com/DJMarshallSantos",
      link: "https://www.linkedin.com/in/marcelo-a-santos-76141b85/",
      stack: "Back-end (Desbravador de Testes)",
      bio: `Mais de 30 anos de experiência no setor do ensino de idiomas. 
      Trabalho a 8 anos na inFlux - Escola de Idiomas Roo/MT, onde atuo a 5 anos como coordenador de metodologia. 
      Com funções do tipo:
      .Entrevistar candidatos para recrutamento;
      .Treinar os mesmo com base a metodologia da escola;
      .Aplicar semestralmente PDCA visando a constante melhoria da qualidade do serviço oferecido;
      .Elaborar atas para reuniões semestrais;
      .Ensinar os idiomas inglês e espanhol para todos os níveis.
      `,
    },
    {
      name: "Henrique Gomes",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEN2crn7v5tNQ/profile-displayphoto-shrink_200_200/0/1657803823402?e=1672876800&v=beta&t=0JqCJyxtZhEu2BLqhZrA7w4M0pnN_8ZSR92MkUWPSQ4",
      git: "https://github.com/Henriqueggperes",
      link: "https://www.linkedin.com/in/henriqueggp-48931422a/",
      stack: "Front-end (Product Owner - Oráculo dos MVPS )",
      bio: `Olá e console.log("Seja bem vindo!"). Meu nome é Henrique e sou um desenvolvedor Web FullStack Júnior. Traço um caminho árduo para que eu me torne o profissional excepcional que desejo ser, mas não há obstáculos que me assustem. Sigo o meu sonho de me desenvolver cada vez mais e provar do que sou capaz, não só para as pessoas em minha volta mas também para mim mesmo. 🚀`,
    },
    {
      name: "Amaro Francisco",
      image: "https://avatars.githubusercontent.com/u/88009922?v=4",
      git: "https://github.com/Amaro13",
      link: "https://www.linkedin.com/in/amaroribeiro/",
      stack: "Front-end (Forjador de Wireframes)",
      bio: `Atualmente desenvolvendo com Typescript, ReactJs , NestJs, HTML e CSS.
      Possuo experiência profissional com VBA, ABAP, SQL e outras linguagens de programação.
      Fiz intercâmbio na Irlanda e consegui desenvolver um nível fluente de inglês com a convivência.
      Formado no curso de engenharia de produção com experiência na área. 
      No meio acadêmico, realizei e publiquei a pesquisa científica: Construção do perfil do estudante da FeMASS.`,
    },
    {
      name: "Paulo Gabriel",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFr2UK9Yhpo2w/profile-displayphoto-shrink_200_200/0/1652917767513?e=1672876800&v=beta&t=mbLBNZc-Mj0feUZcvDxGKQzQhGg9dXFPJadADXFxmZs",
      git: "https://github.com/PauloGLemos",
      link: "https://www.linkedin.com/in/pauloglemos/",
      stack: "Front-end (Artesão de Componnents)",
      bio: `Recently graduated in Digital Games by FIAP, looking for opportunities in the area. I have notions of C#, C++, HTML, CSS, Unity, Bootstrap, Java, A-Frame, entre outros. Além de Photoshop e InDesign.`,
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
      <Header getSearchContent={() => {}} />
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
              <h1>Os Tech Thinkers</h1>
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
