import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import api from "../../../services/api";

import Header from "../../../components/Header";
import { Container, Title, Table } from "./styles";
import ListContentLoader from "../../../components/ListContentLoaderUser";
import List from "../../../components/ListUser";

export default function ListStations() {
  const [stations, setStations] = useState([]);
  const [fillStations, setFillStations] = useState(false);
  const [lastPage, setlastPage] = useState(null);
  const [initalPag, setInitalPag] = useState(1);

  async function getStations(pageNumber = initalPag) {
    try {
      const { data } = await api.get("/stations", {
        params: {
          page: pageNumber
        }
      });
      const consult = data.data;
      setStations([...stations, ...consult]);
      setlastPage(data.lastPage);
      setInitalPag(initalPag + 1);
      if (stations) {
        setFillStations(true);
      }
    } catch (e) {
      if (e.response && e.response.data && e.response.status === 401) {
        toast.error(`🚫${e.response.data.message}`);
      }
    }
  }

  useEffect(() => {
    getStations();
  }, []);

  const LoadMore = () => {
    setInitalPag(initalPag + 1);
    getStations();
  };
  return (
    <>
      <Header />
      <Container>
        <Title>
          <FontAwesomeIcon
            icon={faList}
            style={{ color: "00ff7f", fontSize: "35px" }}
          />{" "}
          Tus aportes
        </Title>
        {fillStations === false ? (
          <ListContentLoader />
        ) : (
          <>
            <Table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  {/* <th>Rerefencia</th> */}
                  <th>Precios</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {stations.map(station => (
                  <List key={station.id} station={station} />
                ))}
              </tbody>
            </Table>
            {initalPag <= parseInt(lastPage) && (
              <a href="#!" onClick={LoadMore}>
                Load More
              </a>
            )}
          </>
        )}
      </Container>
    </>
  );
}
