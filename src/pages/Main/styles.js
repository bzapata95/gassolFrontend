import styled from "styled-components";

export const Container = styled.div`
  width: 949px;
  margin: 0 auto;
  margin-top: 46px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const OptionIntoMap = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  z-index: 1000;
  font-family: "Poppins", sans-serif;
  color: efeff1;
  font-size: 16px;
  @media (min-width: 768px) {
    display: none;
  }
  div {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #efeff1;
      font-weight: bold;
      text-shadow: #1f1f23 0px 1px 6px;
      transition: all 200ms ease-in-out;
      :last-child {
        margin-left: 10px;
        color: #efeff1;
      }
      :hover {
        color: #00ff7f;
      }
    }
  }
`;
