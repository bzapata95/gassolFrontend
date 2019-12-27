import React from "react";
import { Card, Details, DetailsPrice, Section } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMapMarkerAlt,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

export default function CardStation({ station }) {
  return (
    <Card>
      <Details>
        <p>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "F8C822", fontSize: "14" }}
          />
          <span>5</span>
        </p>
        <Section>
          <div>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ color: "EFEFF1", fontSize: "28" }}
            />
          </div>
          <div>
            <h1>{station.name}</h1>
            <span>{station.reference}</span>
          </div>
        </Section>
        <a href="#!">
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{ color: "59ADFF", fontSize: "14" }}
          />
          <span>Ir con waze</span>
        </a>
      </Details>
      <DetailsPrice>
        <span>95: S/. {station.price_95}</span>
        <span>90: S/. {station.price_90}</span>
        <span>80: S/. {station.price_80}</span>
        <span>Die: S/. {station.price_diesel}</span>
      </DetailsPrice>
    </Card>
  );
}
