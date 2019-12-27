import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import { logout } from "../../services/auth";

import { Container } from "./styles";

export default function HeaderAdmin() {
  return (
    <Container>
      <div>
        <Link to="/">
          Gass
          <FontAwesomeIcon
            icon={faTint}
            style={{ color: "00ff7f", fontSize: "20" }}
          ></FontAwesomeIcon>
          l
        </Link>
      </div>
      <div>
        {/* <Link to="/create-new-station">
          <FontAwesomeIcon
            icon={faPlusSquare}
            style={{ color: "00ff7f", fontSize: "20" }}
          ></FontAwesomeIcon>
          Agregar
        </Link> */}
        <NavLink to="/admin-tools" activeClassName="activeLink">
          Dashboar
        </NavLink>
        <NavLink to="/stations/list-stations" activeClassName="activeLink">
          Estaciones
        </NavLink>
        <NavLink to="/users/list-users" activeClassName="activeLink">
          Usuarios
        </NavLink>
        <a href="#!" onClick={() => logout}>
          Salir
        </a>
      </div>
    </Container>
  );
}
