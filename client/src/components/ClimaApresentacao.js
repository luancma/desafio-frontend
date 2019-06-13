import React from "react";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import sol from "../utils/img/default.jpg";
export const NotFound = props => {
  const styleComponent = {
    body: {
      width: "100%",
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
      backgroundImage: `url(${sol})`,
      height: "100vh",
      paddingTop: "10%",
      textAlign: "center"
    },
    jumbo: {
      background: "#6200ea"
    },
    h1: {
      color: "#ede7f6"
    }
  };
  return (
    <div style={styleComponent.body}>
      <Container>
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }}>
              <Jumbotron style={styleComponent.jumbo}>
                <h1 style={styleComponent.h1}>Ops! Página não encontrada</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
