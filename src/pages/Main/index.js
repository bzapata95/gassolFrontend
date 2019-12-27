import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../../components/Header";
// import Station from "../../components/Station";
import Map from "../../components/Map";

import { Background } from "../../styles";
import { Container } from "./styles";

function Main() {
  return (
    <Background>
      <Header></Header>
      <Container>
        <Map withContent={true} width={"100%"} height={"500px"} />
      </Container>
    </Background>
  );
}

export default withRouter(Main);
