import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Cards extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <div className="card-group">
              <div className="card card1">
                <h3>This a card</h3>
              </div>
              <div className="card card2">
                <h3>This a card</h3>
              </div>
              <div className="card card3">
                <h3>This a card</h3>
              </div>
              <div className="card card4">
                <h3>This a card</h3>
              </div>
              {/* <div className="picture"></div> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
