import styled from "styled-components";

export const StationContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  div:last-child {
    display: flex;
    flex-wrap: wrap;
    div {
      margin-right: 10px;
      margin-bottom: 20px;
    }
  }
  div {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    padding-top: 56px;
  }
`;
