import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const HighlightsContainer = styled.section`
${({theme})=>css`
 position: relative;
 height: 200px;
 width: 100%;
 border: 1px solid white;
 ::before{
   content: "DESTAQUES";
   position: absolute;
   top:-70px;
   left:-20px;
   font-weight: bold;
   font-size: 2rem;
  }
`}
`
export const HighLightCanva = styled.div`
${({theme})=>css`
 height: fit-content;
 /* margin: 0 1rem 0 1rem; */
 width: 100px;
 border: 1px solid white;
`}
`
