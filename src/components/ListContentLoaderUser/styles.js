import styled from "styled-components";

export const Tr = styled.tr`
  cursor: pointer;
  background-color: #1f1f23;
  border-radius: inherit;
  transition: all 0.2s ease 0s;
  td {
    border: none;
    padding: 12px 12px;

    :first-child {
      border-radius: 5px 0 0 5px;
    }
    :last-child {
      border-radius: 0px 5px 5px 0;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  color: #efeff1;
  *font-size: 12px;
  border: none;
  border-collapse: separate;
  border-spacing: 0px 10px;
  thead {
    tr {
      color: #00ff7f;
      text-align: left;
      font-weight: normal;
      margin-bottom: 12px;
      th {
        padding-left: 12px;
      }
    }
  }
`;
