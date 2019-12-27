import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { Nav, Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import { isAuthenticated, logout } from "../../services/auth";

function Header({ history }) {
  const logOUT = e => {
    e.preventDefault();
    logout();
    history.push("/signin");
  };
  if (isAuthenticated()) {
    return (
      <Nav back="#18181b">
        <Container>
          <div>
            <h1>
              Gass
              <FontAwesomeIcon
                icon={faTint}
                style={{ color: "00ff7f", fontSize: "20" }}
              ></FontAwesomeIcon>
              l
            </h1>
          </div>
          <div>
            <NavLink to="/create-new-station" activeClassName="activeLink">
              <FontAwesomeIcon
                icon={faPlusSquare}
                style={{ color: "00ff7f", fontSize: "20" }}
              ></FontAwesomeIcon>
              Agregar
            </NavLink>
            {/* <p>{isAuthenticated().name}</p> */}
            <a href="#!" onClick={logOUT}>
              Salir
            </a>
          </div>
        </Container>
      </Nav>
    );
  } else {
    return (
      <Nav back="#18181b">
        <Container>
          <div>
            <h1>
              Gass
              <FontAwesomeIcon
                icon={faTint}
                style={{ color: "00ff7f", fontSize: "20" }}
              ></FontAwesomeIcon>
              l
            </h1>
          </div>
          <div>
            <Link to="/signin">Ingresar</Link>
            <Link to="/signup">Registrarme</Link>
          </div>
        </Container>
      </Nav>
    );
  }
}
export default withRouter(Header);
