import React from "react";
import { ClimaDiaAuxiliarMenor } from "./ClimaDiaAuxiliarMenor";
import { ClimaDiaPrincipal } from "./ClimaDiaPrincipal";

export const SmallDevices = props => {
  return (
    <div>
      {props.weather !== undefined && (
        <ClimaDiaPrincipal
          city={this.props.weather.location.city}
          weatherSlice={this.props.weather.forecasts.slice(0, 1)}
        />
      )}
      {props.weather !== undefined && (
        <ClimaDiaAuxiliarMenor
          city={this.props.weather.location.city}
          weatherSlice={this.props.weather.forecasts.slice(1, 4)}
        />
      )}
    </div>
  );
};
