import React from "react";
import { GetDay, GetIcon } from "../utils/icons";
import { Animated } from "react-animated-css";

export const ClimaDiaAuxiliar = props => {
  return props.weatherSlice.map(item => (
    <Animated animationIn="fadeIn" animationOut="flash" isVisible={true}>
      <div style={estiloDiaAuxiliar}>
        {console.log(item.code)}
        <GetDay size={"32px"} marginLeft={"3%"} day={item.day} />
        <div style={{ width: "100%" }}>
          <p style={{ fontSize: "32px", marginLeft: "15%" }}>
            <GetIcon icon={item.code} size={"82px"} />
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
const estiloDiaAuxiliar = {
  margin: "10px",
  height: "150px",
  border: "1px solid",
  background: "#6200ea",
  color: "#ede7f6"
};
