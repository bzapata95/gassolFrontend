import React, { useState, useEffect } from "react";
// import axios from "axios";
import api from "../../services/api";
import CardStation from "./CardStations";

import { Title } from "../../styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { StationContainer } from "./styles";

export default function Station({as}) {
  const [gas, setGas] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const result = await api.get();
      setGas(result.data);
    };
    consultAPI();
  }, []);

  return (
    <StationContainer>
      <div>
        <FontAwesomeIcon icon={faRocket} style={{ color: "00ff7f" }} />
        <Title size="18" weight="bold">
          Registered Stations
        </Title>
      </div>
      <div>
        {gas.map(station => (
          <CardStation key={station.id} station={station}></CardStation>
        ))}
      </div>
    </StationContainer>
  );
}
