import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomepageBody from "./HomepageBody";


const Homepage = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Welcome">
      <Row >
      
            
        <Col sm={5} className="sidebar">
          <Nav variant="pills" className="flex-column sidebar-box">
            
            <Nav.Item>
            <sm className="heading">Welcome</sm>
              <Nav.Link className="sidebar-items" eventKey="Welcome">
               Introduction
              </Nav.Link>
            </Nav.Item>
            <sm className="heading">Refrences</sm>
            <Nav.Item>
              <Nav.Link className="sidebar-items" eventKey="Charges Endpoints">
              Charges Endpoints
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="sidebar-items" eventKey="Withdrawals Endpoints">
              Withdrawals Endpoints
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="sidebar-items" eventKey="Rates">
            Rates
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="sidebar-items" eventKey="Currencies">
            Currencies
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={6}>
          <Tab.Content>
            <Tab.Pane eventKey="Welcome">
            <HomepageBody/>
            </Tab.Pane>
            <Tab.Pane eventKey="Charges Endpoints">
            <HomepageBody/>
            </Tab.Pane>
            <Tab.Pane eventKey="Withdrawals Endpoints">
            <HomepageBody/>
            </Tab.Pane>
            <Tab.Pane eventKey="Rates">
            <HomepageBody/>
            </Tab.Pane>
            <Tab.Pane eventKey="Currencies">
              {/* <ChangeCustomerPassword/> */}
            </Tab.Pane>
          </Tab.Content>
        </Col>

      </Row>
    </Tab.Container>
  );
};

export default Homepage;
