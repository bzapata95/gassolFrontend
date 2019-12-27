import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${props => `${props.back}`};
  height: 56px;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    *position: fixed;
  }
`;

export const Container = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:first-child {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: #00ff7f;
    }
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a:last-child {
      margin-left: 16px;
      color: #00ff7f;
      display: flex;
      align-items: center;
    }
    a {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      color: #efeff1;
      text-decoration: none;
      cursor: pointer;
    }
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #00ff7f;
  }
`;
