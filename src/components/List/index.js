import React, { useState, Fragment } from "react";
import TimeAgo from "react-timeago";
// import EsString from "react-timeago/lib/language-strings/es";
// import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

import { Tr } from "./styles.js";

import api from "../../services/api";

//const timeAgoFormatter = buildFormatter(timeAgoFormatConfig);

export default function List({ station }) {
  const [item, setItem] = useState(station);
  const handleChangeStatu = async e => {
    e.preventDefault();
    try {
      const result = await api.put("/changeStatu", {
        id: e.target.value
      });

      if (result.status === 200) {
        toast.success(`🚀${result.data.message}`);

        if (parseInt(item.status) === 0) {
          setItem({ ...item, status: "1" });
        } else {
          setItem({ ...item, status: "0" });
        }
      }
    } catch (e) {
      if (e.response.status === 404 && e.response.data) {
        toast.error(`🚨${e.response.data.message}`);
      }
    }
  };

  const handleDeleteStation = async e => {
    e.preventDefault();
    const button = e.target.parentElement.parentElement;
    const alert = window.confirm("¿Are you sure?");

    if (alert) {
      try {
        const result = await api.delete(`/deleteStation/${e.target.value}`);

        if (result.status === 200) {
          toast.success(`🚀${result.data.message}`);
          button.remove();
        }
      } catch (e) {
        if (e.response.status === 404 && e.response.data) {
          toast.error(`🚨${e.response.data.message}`);
        }
      }
    }
  };

  return (
    <Tr>
      <td>{item.name}</td>
      <td>{item.reference}</td>
      <td>
        {item.products.map(price => (
          <Fragment key={price.id}>
            <span>
              {price.name}: S/. {price.price}
            </span>
            <br />
          </Fragment>
        ))}
      </td>
      <td>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`}
        >
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            style={{ fontSize: "20px", color: "#fff" }}
          />
        </a>
      </td>
      <td>
        {item.status === "1" ? (
          <span className="active">Active</span>
        ) : (
          <span className="unactive">Unactive</span>
        )}
      </td>
      <td>
        <TimeAgo date={`${item.created_at}Z`} />
      </td>
      <td className="acctions">
        <button type="button" onClick={handleChangeStatu} value={item.id}>
          {parseInt(item.status) === 1 ? "Unaccept" : "Accept"}
        </button>
        <button type="button" onClick={handleDeleteStation} value={item.id}>
          Delete
        </button>
      </td>
    </Tr>
  );
}
