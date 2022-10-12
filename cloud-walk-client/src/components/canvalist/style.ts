import styled from "styled-components";
import theme from "../../assets/styles/theme";

export const CanvasListContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin-top: 3rem;
  justify-content: center;
  a {
    color: inherit;
    text-decoration: none;
  }
  .update{
    filter: grayscale(1);
  }
  .updt-mode-container{
    cursor: pointer;
  }
`;

export const PaginationContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination{
    z-index: 0;
  }
  .active > .page-link {
    background-color: ${theme.colors.secondaryColor};
    border-color: ${theme.colors.secondaryColor};
  }
  .active > .page-link:focus {
    box-shadow: 0 0 0 0.25rem rgba(253, 145, 95, 0.31),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
