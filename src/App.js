import React, { Component } from "react";
import SideNavbar from "./views/SideNavbar";
import MainPage from "./views/MainPage";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

class App extends Component {

  render() {
    return (
        <Router>
        <Container fluid>
              <Row>
              <Col xs={2} id="sidebar-wrapper">      
                      <SideNavbar />
                </Col>
                <Route path = "/civs/:id" component = {()=> (<Col xs = {10}><MainPage/></Col>)}/>
                  
                </Row>

            </Container>
        </Router>

          
    );
  }
}
export default App;
