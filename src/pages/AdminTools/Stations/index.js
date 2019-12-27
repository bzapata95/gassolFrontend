import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../../services/api";
import HeaderAdmin from "../../../components/HeaderAdmin";
// import List from "../../../components/List";
import { Container, Table, Title } from "./styles";
import List from "../../../components/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

// const formatter = buildFormatter(EsString);

function Stations({ history }) {
  const [stations, setStations] = useState([]);
  const [initalPag, setInitalPag] = useState(1);
  const [lastPage, setlastPage] = useState(null);
  async function isAdmin(pageNumber = initalPag) {
    try {
      const { data } = await api.get("/listStations", {
        params: {
          page: pageNumber
        }
      });
      const consult = data.data;
      setStations([...stations, ...consult]);
      setlastPage(data.lastPage);
      setInitalPag(initalPag + 1);
    } catch (e) {
      if (e.response && e.response.data && e.response.status === 401) {
        toast.error(`🚫${e.response.data.message}`);
        history.push("/");
      }
    }
  }

  useEffect(() => {
    isAdmin();
  }, []);

  const LoadMore = () => {
    setInitalPag(initalPag + 1);
    isAdmin();
  };
  return (
    <>
      <HeaderAdmin />
      <Container>
        <Title>
          <FontAwesomeIcon
            icon={faRocket}
            style={{ color: "00ff7f", fontSize: "35px" }}
          />{" "}
          Record of stations
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reference</th>
              <th>Prices</th>
              <th>View</th>
              <th>Status</th>
              <th>Created</th>
              <th>Acctions</th>
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
      </Container>
    </>
  );
}

export default withRouter(Stations);
