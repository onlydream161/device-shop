import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";

const Shop = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-3" md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
