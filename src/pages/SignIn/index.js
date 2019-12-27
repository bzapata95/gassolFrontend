import React, { useState, Fragment } from "react";
import HeaderSignin from "../../components/HeaderSignin";
import api from "../../services/api";
import { login } from "../../services/auth";
import Helmet from "react-helmet";

import { Sinput } from "../../components/Input/styles";
import { Link, withRouter } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

import { Register, Button } from "../Signup/styles";

function SignIn({ history }) {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const stateSetData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = data;
    if (!email || !password) {
      toast.error("💀 Llene los campos por favor!");
    } else {
      try {
        const response = await api.post("/authenticate", { email, password });
        login(response.data.token);
        history.push("/");
      } catch (err) {
        if (err.response && err.response.data) {
          toast.error("😪 Verifica tus credenciales");
        }
      }
    }
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inicio de sesion</title>
        <meta
          name="description"
          content="Inicia sesión en gassol y empieza a ubicar las gasolinerias mas cercanas a ti"
        />
      </Helmet>
      <HeaderSignin></HeaderSignin>
      <Register>
        <section>
          <Link to="/">
            Gass
            <FontAwesomeIcon
              icon={faTint}
              style={{ color: "00ff7f", fontSize: "20" }}
            ></FontAwesomeIcon>
            l
          </Link>
          <div>
            <h4>Inicio de sesion</h4>
            <form onSubmit={handleSignIn}>
              <Sinput>
                <label>Correo electrónico:</label>
                <input
                  type="email"
                  header="Email:"
                  name="email"
                  placeholder="example@example.com"
                  value={data.email}
                  onChange={stateSetData}
                  autoComplete="off"
                  autoFocus
                ></input>
              </Sinput>
              <Sinput>
                <label>Contraseña:</label>
                <input
                  type="password"
                  header="Password:"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  value={data.password}
                  onChange={stateSetData}
                  autoComplete="off"
                ></input>
              </Sinput>
              <Button>Iniciar sesion</Button>
            </form>
            <p>Ayúdanos a crecer en todo el Perú</p>
            <Link to="/signup">¿No tienes una cuenta? Registrate aquí!</Link>
          </div>
        </section>
      </Register>
    </Fragment>
  );
}

export default withRouter(SignIn);
