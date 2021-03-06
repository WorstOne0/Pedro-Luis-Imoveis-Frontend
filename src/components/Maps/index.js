import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { Container } from "./styles";

import { GiPositionMarker } from "react-icons/gi";

const Maps = ({
  height = "100%",
  width = "100%",
  latitute = -24.960248,
  longitude = -53.45281,
}) => {
  if (latitute === 0 && longitude === 0) {
    latitute = -24.960248;
    longitude = -53.45281;
  }

  const GoogleMaps = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: latitute, lng: longitude }}
      >
        <Marker position={{ lat: latitute, lng: longitude }} />
      </GoogleMap>
    ))
  );

  return (
    <Container height={height} width={width}>
      <GoogleMaps
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height }} />}
        containerElement={<div style={{ height }} />}
        mapElement={<div style={{ height }} />}
      />
    </Container>
  );
};

export default Maps;
