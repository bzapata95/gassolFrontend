import React from "react";
// import { Link } from "react-router-dom";
import { Nav, Container } from "../Header/styles";

export default function Header() {
  return (
    <Nav>
      <Container>
        <div></div>
        <div>{/* <Link to="/signin">Sign in</Link> */}</div>
      </Container>
    </Nav>
  );
}
