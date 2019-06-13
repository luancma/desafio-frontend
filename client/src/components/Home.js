import { Container } from "reactstrap";
import MediaQuery from "react-responsive";
import React from "react";
import { changeBackground } from "../utils/icons";
import { connect } from "react-redux";
import SearchBar from "../container/SearchBar";
import { LargeDevices } from "./LargeDevices";
import { SmallDevices } from "./SmallDevices";
import { Animated } from "react-animated-css";

export const Home = props => {
  const styleComponent = {
    width: "100%",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundImage: `${
      props.weather !== undefined
        ? props.weather.forecasts
            .slice(0, 1)
            .map(item => changeBackground(item.code))
        : changeBackground(null)
    }`,
    height: "100vh",
    paddingTop: "10%"
  };
  return (
    <Animated animationIn="fadeIn" animationOut="flash" isVisible={true}>
      <div style={styleComponent}>
        <Container>
          <SearchBar />
          <MediaQuery minDeviceWidth={1200}>
            {matches => {
              if (matches) {
                return <LargeDevices weather={props.weather} />;
              } else return <SmallDevices weather={props.weather} />;
            }}
          </MediaQuery>
        </Container>
      </div>
    </Animated>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.weather.weather
  };
};

export default connect(mapStateToProps)(Home);
