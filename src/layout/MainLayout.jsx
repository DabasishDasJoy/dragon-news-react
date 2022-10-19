import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Foooter from "../Pages/Shared/Footer/Foooter";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSidenav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSidenav/RightSideNav";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-lg-block d-none">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Foooter></Foooter>
    </div>
  );
};

export default MainLayout;
