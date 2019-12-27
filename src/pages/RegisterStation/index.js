import React, { useState } from "react";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { usePosition } from "use-position";
import Helmet from "react-helmet";
import { withRouter } from "react-router-dom";

import api from "../../services/api";

import { Container, ContentDesktop } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function RegisterStation({ history }) {
  const { latitude, longitude } = usePosition(false, {
    enableHighAccuracy: true,
    maximumAge: 180000
  });
  const initial = {
    name: "",
    reference: ""
  };
  const [dataStation, setDataStation] = useState(initial);
  const [products, setProducts] = useState([{ name: "", price: "" }]);

  const handleInputs = e => {
    setDataStation({
      ...dataStation,
      [e.target.name]: e.target.value,
      latitude,
      longitude
    });
  };
  const submitForm = async e => {
    e.preventDefault();
    const { name, reference, latitude, longitude } = dataStation;
    if (!name || name.length < 5) {
      toast.error(
        "Ponga el nombre de la gasolinería, debe ser mayor a 5 carácteres"
      );
      return;
    }
    if (!products[0].name && !products[0].price) {
      toast.error("Debe poner al menos un nombre y precio!");
      return;
    }
    const emptyProduct = products.filter(
      product => product.name === "" && product.price === ""
    );
    // console.log(emptyProduct);
    if (emptyProduct.length > 0) {
      toast.error("Llene todos campos agregados por favor!");
      return;
    }
    try {
      const result = await api.post(`/stations`, {
        name,
        reference,
        latitude,
        longitude,
        products
      });
      // console.log(result);

      if (result.status === 201) {
        setDataStation(initial);
        toast.success(
          "🚀 Gracias por aportar, se envió para su revisión! Muy pronto estará en linea"
        );
        history.push("/");
      }
    } catch (err) {
      if (e.response && e.response.data) {
        toast.error(`💀 Algo salio mal!`);
      }
    }
  };

  const newCampo = () => {
    setProducts([...products, { name: "", price: "" }]);
  };

  const handleLessCampo = i => () => {
    setProducts(products.filter((name, index) => i !== index));
  };

  const handleNameProduct = i => e => {
    const newProduct = products.map((name, index) => {
      if (i !== index) return name;
      return {
        ...name,
        name: e.target.value
      };
    });
    setProducts(newProduct);
  };

  const handlePriceProduct = i => e => {
    const newProduct = products.map((price, index) => {
      if (i !== index) return price;
      return {
        ...price,
        price: e.target.value
      };
    });
    setProducts(newProduct);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registro de una gasolineria</title>
      </Helmet>
      <Header />
      <Container>
        <h2>Registrar una gasolinería</h2>
        <br></br>
        <form onSubmit={submitForm}>
          <label>Nombre de la gasolinería:</label>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInputs}
            autoComplete="off"
            value={dataStation.name}
          />
          <label>
            Alguna referencia:<small>(opcional)</small>
          </label>
          <input
            type="text"
            placeholder="Referencia"
            name="reference"
            onChange={handleInputs}
            autoComplete="off"
            value={dataStation.reference}
          />
          <label>¿Que es lo que venden?</label>

          {products.map((input, index) => (
            <div key={index} className="prices">
              <input
                type="text"
                placeholder="Nombre del producto"
                name="nameProduct"
                onChange={handleNameProduct(index)}
                autoComplete="off"
                value={products.name}
              />
              <input
                type="number"
                placeholder="precio"
                name="price"
                onChange={handlePriceProduct(index)}
                autoComplete="off"
                value={products.price}
                step="any"
              />
              <a href="#!" onClick={handleLessCampo(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </a>
            </div>
          ))}
          <div className="addPrice">
            <a href="#!" onClick={newCampo}>
              <FontAwesomeIcon icon={faPlusSquare} /> Agregar más
            </a>
          </div>
          <button type="submit">Enviar para su revisión</button>
        </form>
      </Container>
      <ContentDesktop>
        <h2>Esta funcionalidad no esta habilitado para computadoras</h2>
        <small>
          Por favor! Registre desde un movil para mayor precisión en su
          localización
        </small>
      </ContentDesktop>
    </>
  );
}

export default withRouter(RegisterStation);
