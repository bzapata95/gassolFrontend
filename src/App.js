import React from "react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gassol</title>
        <meta
          name="description"
          content="Ubica las gasolinerías mas cercanas a ti rapidamente, al rededor de 5 kilometros"
        />
      </Helmet>
      <ToastContainer />
      <Routes></Routes>
    </>
  );
}

export default App;
