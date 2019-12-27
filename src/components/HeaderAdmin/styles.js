import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #efeff1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1f1f23;
  font-family: "Poppins";
  height: 56px;
  padding: 0 24px;
  font-weight: 600;
  position: fixed;
  div:last-child {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    a:first-child {
      display: flex;
      align-items: center;
      margin-left: 0px;
    }
    a {
      color: #efeff1;
      text-decoration: none;
      margin-left: 10px;
    }
  }

  div {
    :first-child {
      a {
        margin: 0;
        color: #00ff7f;
        font-size: 22px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 768px) {
    padding: 0 150px;
  }
`;
