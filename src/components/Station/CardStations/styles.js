import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: calc(33.3% - 1em);
  @media (max-width: 768px) {
    width: 100%;
  }
  height: 118px;
  border-radius: 10px;
  border: solid 1px #18181b;
  background: #1f1f23;
  padding: 14px 24px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  width: 70%;
  margin: 0 !important;
  p {
    margin: 0;
    span {
      font-weight: 700;
      font-size: 14px;
      margin-left: 5px;
    }
  }
  h1 {
    margin: 0;
    margin-left: 0 !important;
    font-weight: 600;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: #59adff;
    span {
      margin-left: 5px;
      font-size: 11px;
    }
  }
`;

export const Section = styled.section`
  display: flex !important;
  margin: 0 !important;
  margin-left: 5px;
  line-height: 19px;
  align-items: center;
  width: 100%;
  span {
    font-size: 11px;
    line-height: 12px;
  }
  div:last-child {
    margin-left: 5px !important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  div {
    margin: 0 !important;
  }
`;

export const DetailsPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  width: 30%;
  margin: 0 !important;
  color: #fff;
  font-size: 14px;
`;
