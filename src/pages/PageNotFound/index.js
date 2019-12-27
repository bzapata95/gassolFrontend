import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
// import Svg from "./img/page_not_found.svg";

export default function PageNotFound() {
  return (
    <>
      <Container>
        <img
          src={process.env.PUBLIC_URL + "/img/page_not_found.svg"}
          alt="Page not found"
        />
        <h1>Página no encontrada</h1>
        <h2>404</h2>
        <Link to="/">Volver al inicio</Link>
      </Container>
    </>
  );
}
