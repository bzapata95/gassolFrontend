import styled from "styled-components";

export const Register = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 0 auto;
  color: #efeff1;
  padding-top: 20px;
  width: 100% !important;
  label {
    font-size: 13px;
  }
  @media (max-width: 768px) {
    width: 95%;
    padding-top: 50px;
  }
  h4 {
    text-align: center;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      width: 100%;
    }
    a {
      color: #00ff7f;
      font-size: 33px;
      font-weight: bold;
      text-decoration: none;
    }
    div {
      background-color: #18181b;
      width: 380px;
      height: 100%;
      padding: 16px 24px;
      border-radius: 5px;
      form {
        width: 100%;
      }
      p {
        font-size: 10px;
        color: #00ff7f;
        text-align: center !important;
      }
      a {
        font-size: 10px;
        color: #efeff1;
        font-weight: normal;
        text-align: center;
        display: block;
        transition: all 200ms ease-in-out;
        :hover {
          color: #00ff7f;
        }
      }
    }
  }
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  width: 100%;
  padding: 14px 0;
  background: #00ff7f;
  border: none;
  font-weight: bold;
  font-size: 15px;
  border-radius: 6px;
  cursor: pointer;
`;
