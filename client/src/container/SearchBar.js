import React, { Component } from "react";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import { getWeather } from "../store/actions/weather";
import { connect } from "react-redux";

class SearchBar extends Component {
  state = {
    location: "",
    redirectToView: false
  };
  handleLocation = e => {
    console.log(this.state.location);
    this.props.weather === undefined && console.log("vazio");
    e.preventDefault();
    this.props.dispatch(getWeather(`${this.state.location}`));
  };

  handleChangeLocation = e => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  };

  render() {
    return (
      <div>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <InputGroup style={{ width: "50vw" }} size="lg">
              <Input
                value={this.state.location}
                onChange={e => this.setState({ location: e.target.value })}
              />
              <InputGroupAddon addonType="append">
                <Button
                  style={{ backgroundColor: "#6200ea" }}
                  onClick={e => this.handleLocation(e)}
                >
                  Buscar
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.weather.weather
  };
};

export default connect(mapStateToProps)(SearchBar);
