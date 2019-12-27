import styled from "styled-components";

export const Tr = styled.tr`
  cursor: pointer;
  background-color: #1f1f23;
  border-radius: inherit;
  transition: all 0.2s ease 0s;
  :hover {
    background: rgb(25, 24, 31);
  }
  td {
    border: none;
    padding: 12px 12px;

    :first-child {
      border-radius: 5px 0 0 5px;
    }
    :last-child {
      border-radius: 0px 5px 5px 0;
    }
    span.unactive {
      font-size: 9px;
      font-weight: bold;
      background-color: #fc4850;
      padding: 3px 5px;
      border-radius: 5px;
    }
    span.active {
      font-size: 9px;
      font-weight: bold;
      color: #0e0e10;
      background-color: #00ff7f;
      padding: 3px 5px;
      border-radius: 5px;
    }
    a {
      padding: 0;
      margin: 0;
    }
  }
  td.acctions {
    button {
      margin-right: 10px;
      background-color: transparent;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 5px 8px;
      outline: none;
      color: #efeff1;
      font-weight: bold;
      :hover {
        background-color: #0e0e10;
      }
    }
  }
`;
