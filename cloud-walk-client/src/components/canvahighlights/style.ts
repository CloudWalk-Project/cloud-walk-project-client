import styled, { css } from "styled-components";

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
   left:-30px;
   font-weight: bold;
   font-size: 2rem;
 }
`}
`
export const HighLightCanva = styled.div`
${({theme})=>css`
 height: 200px;
 /* margin: 0 1rem 0 1rem; */
 width: 100px;
 border: 1px solid white;
`}
`
