import React from "react";
import { Row, Col } from "reactstrap";
import { ClimaDiaAuxiliar } from "./ClimaAuxiliar";
import { ClimaDiaPrincipal } from "./ClimaDiaPrincipal";

export class LargeDevices extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={{ size: 4, offset: 2 }} md="6" sm="12">
          {/* Componente maior */}
          {this.props.weather !== undefined && (
            <ClimaDiaPrincipal
              city={this.props.weather.location.city}
              weatherSlice={this.props.weather.forecasts.slice(0, 1)}
            />
          )}
        </Col>
        <Col
          lg={{ size: 4, offset: 2 }}
          md="6"
          sm="12"
          style={{ margin: 0, padding: 0 }}
        >
          {this.props.weather !== undefined && (
            <ClimaDiaAuxiliar
              city={this.props.weather.location.city}
              weatherSlice={this.props.weather.forecasts.slice(1, 4)}
            />
          )}
        </Col>
      </Row>
    );
  }
}
