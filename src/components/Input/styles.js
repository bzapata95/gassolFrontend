import styled from "styled-components";

export const Sinput = styled.div`
  height: 100% !important;
  width: 100% !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  label {
    font-size: 15px;
    font-weight: 400;
  }
  input {
    font-family: "Poppins", sans-serif;
    border-radius: 4px;
    background-color: #1f1f23;
    border: none;
    padding: 14px;
    color: #efeff1;
    font-size: 12px;
    margin-bottom: 10px;
    :focus {
      outline-width: 5px;
      outline-color: #00ff7f;
      border-radius: 4px;
    }
  }
`;
