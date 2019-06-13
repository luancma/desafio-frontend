import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="ligth" light expand="md">
        <Link to="/" style={{ color: "#6200ea", fontSize: "24px" }}>
          Climax
        </Link>
      </Navbar>
    );
  }
}
