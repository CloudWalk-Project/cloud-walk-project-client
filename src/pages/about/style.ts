import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const About = styled.section`
  ${() => css`
    background-color: ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    overflow: auto;
  `}
`;

export const introduction = styled.section`
  height: 95vh;
  width: 100%;
  .intro-text-container {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    margin-left: auto;
    box-sizing: border-box;
    height: 100%;
    width: 85%;
    /* border: 1px solid white; */
    color: white;
    .heading-container {
      display: flex;
      justify-content: start;
      height: 10%;
      width: 100%;
      h1 {
        color: ${theme.colors.secondaryColor};
        font-size: 3.5rem;
      }
    }
    .text-holder {
      height: fit-content;
      width: 100%;
      box-sizing: border-box;
      padding-top: 2rem;
      p {
        font-size: 2rem;
        width: 80%;
      }
    }
    .team-container {
      display: flex;
      padding-top: 1rem;
      flex-direction: column;
      height: 40%;
      width: 90%;
      h1 {
        color: ${theme.colors.secondaryColor};
        height: 10%;
      }
      .teamMates-holder {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        height: 95%;
        width: 100%;
        a{
          height: 100%;
          width: 15%;
        }
        .teamMate-card {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          cursor: pointer;
          span{
            display: flex;
            justify-content: center;
            font-size: 1.2rem;
            width: 100%;
          }
          img{
            height: auto;
            width: 100%;
          }
        }
      }
    }
  }
`;

export const teamMateSection = styled.section`
display: flex;
border-top: 1px solid ${theme.colors.textColor};
height: 100vh;
width: 100%;
color: ${theme.colors.textColor};
background-color: ${theme.colors.primaryColor};
.info-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  .info{
    height: 80%;
    width: 70%;
    .bio{
      height: 50%;
      font-size: 1.5rem;
    }
    .contact{
      display: flex;
      flex-direction: column;
      height: 50%;
      width: 100%;
      cursor: pointer;
      a{
        color:inherit;
        text-decoration:none;
        height: 50%;
        font-size: 1.2rem;
        
        .git, .linkedin{
          color: ${theme.colors.secondaryColor};
          height: 5.4rem;
          width: 5.4rem;
        }
      }
    }
  }
}
.image-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  img{
    height: 60%;
    width: 60%;
  }
  span{
    margin-top: 1rem;
    color: ${theme.colors.secondaryColor};
    font-weight: bold;
    font-size: 2rem;
  }
}
`