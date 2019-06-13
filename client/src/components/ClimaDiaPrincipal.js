import React from "react";
import { GetIcon, GetDay } from "../utils/icons";
import { Animated } from "react-animated-css";

export const ClimaDiaPrincipal = props => {
  return props.weatherSlice.map(item => (
    <Animated animationIn="fadeIn" animationOut="flash" isVisible={true}>
      <div style={estiloDiaPrincipal}>
        <GetDay size={"52px"} day={item.day} />
        <br />
        <span style={{ fontSize: "42px" }}>{props.city.toUpperCase()}</span>
        <br />
        <GetIcon icon={item.code} size={"200px"} />
        <div style={{ width: "100%" }}>
          <p style={{ fontSize: "52px", textAlign: "center" }}>
            <i className="fas fa-sort-down" />
            {item.low}º
            <i className="fas fa-sort-up" style={{ marginLeft: "3%" }} />
            {item.high}º
          </p>
        </div>
      </div>
    </Animated>
  ));
};

const estiloDiaPrincipal = {
  height: "470px",
  color: "#ede7f6",
  margin: "10px",
  border: "1px solid",
  padding: "auto",
  textAlign: "center",
  background: "#6200ea"
};
