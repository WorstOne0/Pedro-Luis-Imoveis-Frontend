import React from "react";

import { Container, PopUpMessage } from "./styles";

import { ClimbingBoxLoader } from "react-spinners";

const Loading = ({
  height = "100vh",
  width = "100%",
  color = "#fff",
  svg = "#003c8f",
}) => {
  return (
    <Container height={height} width={width} color={color}>
      <ClimbingBoxLoader
        css={{ display: "block", margin: "0 auto", borderColor: "#003c8f" }}
        sizeUnit={"px"}
        size={20}
        color={svg}
        loading={true}
      />
    </Container>
  );
};

export default Loading;
