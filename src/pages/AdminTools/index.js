import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";
import HeaderAdmin from "../../components/HeaderAdmin";

import { Container } from "./styles";

const AdminTools = ({ history }) => {
  useEffect(() => {
    async function isAdmin() {
      try {
        await api.get("/listStations");
      } catch (e) {
        if (e.response && e.response.data && e.response.status === 401) {
          toast.error(`🚫${e.response.data.message}`);
          history.push("/");
        }
      }
    }
    isAdmin();
  }, [history]);

  return (
    <>
      <HeaderAdmin />
      <Container>
        <h1>DashBoard</h1>
      </Container>
    </>
  );
};

export default withRouter(AdminTools);
