import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  img {
    width: 100%;
  }
  h1,
  h2 {
    color: #efeff1;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #00ff7f;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    padding: 0 24px;
    h1 {
      font-size: 22px;
    }
    a {
      font-size: 12px;
    }
  }
`;
