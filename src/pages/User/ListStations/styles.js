import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 24px 70px 24px;
  font-family: "Poppins";

  a {
    text-align: center;
    display: block;
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
    color: #00ff7f;
    transition: all 200ms ease-in-out;
    padding: 20px 0;
    margin-bottom: 20px;
    :hover {
      color: #efeff1;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const Table = styled.table`
  width: 100%;
  color: #efeff1;
  font-size: 12px;
  border: none;
  border-collapse: separate;
  border-spacing: 0px 10px;
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      color: #00ff7f;
      text-align: left;
      font-weight: normal;
      margin-bottom: 12px;
      th {
        padding-left: 12px;
        padding-bottom: 16px;
      }
    }
  }
`;

export const Title = styled.h1`
  color: #efeff1;
`;
