import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Wrapper } from "./styles";

import api from "../../services/api";

export default function Map({ withContent, width, height }) {
  const getMaping = async () => {
    const map = L.map(`map`, {
      zoom: 14,
      worldcopyjump: false,
      zoomControl: false
    });
    L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png", {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17
    }).addTo(map);
    map.locate({ enableHighAccuracy: true });
    map.on("locationfound", e => {
      var iconPerson = L.icon({
        iconUrl: "./img/marker.svg",
        iconSize: [30, 30]
      });
      const coords = [e.latlng.lat, e.latlng.lng];
      L.marker(coords, { icon: iconPerson })
        .addTo(map)
        .bindPopup("Estas aquí!")
        .openPopup();
      var latlng = L.latLng(e.latlng.lat, e.latlng.lng);
      map.panTo(latlng);
      L.circle(coords, { radius: 2000, color: "#1f1f23", width: 1 }).addTo(map);
      // console.log(coords);
      // connect api
      if (withContent === true) {
        const getGas = async () => {
          const stations = await api.get("/", {
            params: {
              longitude: e.latlng.lng,
              latitude: e.latlng.lat
            }
          });
          // console.log(stations);
          var iconStation = L.icon({
            iconUrl: "./img/tint.svg",
            iconSize: [35, 35]
          });
          stations.data.map(station =>
            L.marker([station.latitude, station.longitude], {
              icon: iconStation
            })
              .bindPopup(
                `<h2 style="margin:0">
              ${station.name}<br>
              </h2>
              <small>${station.reference ? station.reference : ""}</small>
              <hr>
              <label style="margin-bottom:10px; display:inline-block;"><strong>PRECIOS DISPONIBLES:</strong></label><br>
              ${station.products.map(
                product =>
                  `<span><strong>${product.name}:</strong> S/. ${product.price}</span><br>`
              )}
              <p>Distrancia: ${station.distance.toFixed(2)} km</p>
              <div style="display:flex;align-items:center;justify-content:space-between">
                <small >Creado por: ${station.user.name}</small>
                <img src="${
                  station.user.avatar !== null
                    ? station.user.avatar_url
                    : `${process.env.PUBLIC_URL}/img/avatar.png`
                }" width="35px" style="margin-left:12px;border-radius:50%">
              </div>`
              )
              .addTo(map)
          );
        };
        getGas();
      }
    });
  };

  useEffect(() => {
    getMaping();
  }, []);

  return (
    <>
      <Wrapper width={width} height={height} id="map"></Wrapper>
    </>
  );

  // return <Wrapper width="100%" height="500px" id="map"></Wrapper>;
}
