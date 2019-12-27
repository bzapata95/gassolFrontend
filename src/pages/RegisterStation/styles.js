import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 70px 12px 10px 12px !important;
  font-family: "Poppins";
  font-size: 12px;
  color: #efeff1;
  h2 {
    margin: 0;
  }
  form {
    background-color: #18181b;
    width: 100%;
    padding: 24px 24px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    input {
      font-family: "Poppins", sans-serif;
      border-radius: 4px;
      background-color: #1f1f23;
      border: none;
      padding: 14px;
      color: #efeff1;
      font-size: 12px;
      margin-bottom: 10px;
      margin-top: 10px;
      :focus {
        outline-width: 5px;
        outline-color: #00ff7f;
        border-radius: 4px;
      }
    }
    div.prices {
      display: flex;
      width: 100%;
      /* flex-wrap: wrap; */
      /* justify-content: space-between; */
      align-items: center;
      input {
        width: 100%;
        margin-right: 10px;
      }
      /* div {
        display: block;
        justify-content: space-between;
        width: 200px; */
      a {
        font-size: 20px;
        cursor: pointer;
        display: inline-block;
        margin-right: 10px;
        color: #00ff7f;
        :last-child {
          margin-right: 0;
          color: #fc4850;
        }
        /* } */
      }
    }
    div.addPrice {
      margin: 0 auto;
      a {
        background-color: #f8c822;
        padding: 12px 24px;
        display: inline-block;
        margin-bottom: 12px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        text-decoration: none;
        color: #0e0e10;
        transition: all 200ms ease-in-out;
        :hover {
          background-color: #fae800;
        }
      }
    }
    button {
      font-family: "Poppins", sans-serif;
      width: 100%;
      padding: 13px 0;
      background: #00ff7f;
      border: none;
      font-weight: 600;
      font-size: 14px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContentDesktop = styled(Container)`
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;
