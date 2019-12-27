import styled from "styled-components";

export const Background = styled.div`
  *background-color: #0e0e10;
  width: 100%;
  padding: 0;
  color: #fff;
`;

export const Container = styled.div`
  width: ${props => `${props.width}`}%;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
`;

export const Title = styled.h1`
  font-size: ${props => `${props.size}`}px;
  font-weight: ${props => `${props.weight}`}px;
`;
