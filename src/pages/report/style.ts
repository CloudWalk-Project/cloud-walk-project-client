import styled, { css } from "styled-components";

export const reportMain = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.primaryColor};
    overflow: auto;
    margin: 0;
    padding: 0;
  `}
`;
export const reportContainer = styled.div`
  ${({}) => css`
    /* position: fixed; */
    /* top: 20%;
    left: 5%; */
    /* margin-top: -65px;
    margin-left: -100px; */
    height: 50%;
    width: 100%;
  `}
`;

export const reportButton = styled.button`
  ${({}) => css`
    background-color: #4caf50;
    border-radius: 5px;
    margin-left: 47%;
    margin-top: 5px;
    color: white;
  `}
`;

export const reportContent = styled.div`
  ${({ theme }) => css`
    box-sizing: content-box;
    padding: 30px;
    border: 1px solid black;
    font-style: sans-serif;
    background-color: ${theme.colors.baseForm};
    text-align: center;
    h2 {
      color: ${theme.colors.secondaryColor};
    }
    table {
      height: fit-content;
      table-layout: fixed;
      width: 100%;
      border-collapse: collapse;
      border: 1px solid ${theme.colors.textColor};
      overflow: auto;
    }
    th,
    td {
      padding: 20px;
      border: 1px solid ${theme.colors.textColor};
    }

    th {
      letter-spacing: 2px;
      b{
        color: ${theme.colors.textColor};
      }
    }

    td {
      letter-spacing: 1px;
    }

    tbody td {
      text-align: center;
    }

    tfoot th {
      text-align: right;
    }

    thead th,
    tfoot th,
    tfoot td {
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.secondaryColor};
    }

    table {
      background-color: ${theme.colors.primaryColor};
      color: white;
    }

    caption {
      padding: 20px;
      caption-side: bottom;
      color: #666;
      text-align: center;
      letter-spacing: 1px;
    }

    #who {
      text-align: center;
    }
  `}
`;
