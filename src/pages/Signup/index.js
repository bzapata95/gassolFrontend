import React, { Fragment, useState } from "react";
import HeaderSignin from "../../components/HeaderSignin";
import Helmet from "react-helmet";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Sinput } from "../../components/Input/styles";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

import { Register, Button } from "./styles";

function Singup({ history }) {
  const initial = { name: "", email: "", password: "" };
  const [data, storeData] = useState(initial);
  const stateStoreProduct = e => {
    storeData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password } = data;
    // console.log(name);
    if (!name || !email || !password) {
      toast.error("❌ Llene todos los campos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    try {
      const result = await api.post(`/register`, {
        name,
        email,
        password
      });
      // console.log(result);

      if (result.status === 200) {
        toast.success("🚀 Te has registrado correctamente! Disfruta.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });

        const response = await api.post("/authenticate", { email, password });
        login(response.data.token);
        history.push("/");
      }
    } catch (e) {
      if (e.response && e.response.data) {
        toast.error(`💀 ${e.response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    }
  };
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registro de gassol</title>
        <meta
          name="description"
          content="Registrate en gassol y ubica las gasolinerías mas cercanas a ti"
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
            <h4>Formulario de registro</h4>
            <form onSubmit={handleSignUp}>
              <Sinput>
                <label>Nombre completo:</label>
                <input
                  type="text"
                  header="Name:"
                  name="name"
                  placeholder="Ingresa tu nombre completo"
                  value={data.name}
                  onChange={stateStoreProduct}
                  autoComplete="off"
                  autoFocus
                ></input>
              </Sinput>
              <Sinput>
                <label>Correo electrónico:</label>
                <input
                  type="email"
                  header="Email:"
                  name="email"
                  placeholder="example@example.com"
                  value={data.email}
                  onChange={stateStoreProduct}
                  autoComplete="off"
                ></input>
              </Sinput>
              <Sinput>
                <label>Contraseña:</label>
                <input
                  type="password"
                  header="Password:"
                  name="password"
                  placeholder="Ingresa alguna contraseña"
                  value={data.password}
                  onChange={stateStoreProduct}
                  autoComplete="off"
                ></input>
              </Sinput>
              <Button>Registrarme</Button>
            </form>
            <p>Ayúdanos a crecer en todo el Perú</p>
            <Link to="/signin">¿Ya tienes una cuenta? Inicia sesion aquí!</Link>
          </div>
        </section>
      </Register>
    </Fragment>
  );
}

export default withRouter(Singup);
