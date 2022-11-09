import styled, { css } from "styled-components";

export const reportMain = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.primaryColor};
  `}
`;
export const reportContainer = styled.div`
  ${({}) => css`
    position: fixed;
    top: 20%;
    left: 5%;
    margin-top: -65px;
    margin-left: -100px;
    border-radius: 7px;
  `}
`;

export const reportButton = styled.button`
  ${({}) => css`
    background-color: #4caf50;
    border-radius: 5px;
    margin-left: 47%;
    margin-bottom: 5px;
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

    .h2 {
      color: ${theme.colors.primaryColor};
    }
    table {
      table-layout: fixed;
      width: 100%;
      border-collapse: collapse;
      border: 1px solid ${theme.colors.textColor};
    }
    th,
    td {
      padding: 20px;
      border: 1px solid ${theme.colors.textColor};
    }

    th {
      letter-spacing: 2px;
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
