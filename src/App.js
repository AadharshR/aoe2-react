import React, { Component } from "react";
import SideNavbar from "./views/SideNavbar";
import MainPage from "./views/MainPage";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import "./assets/MainPage.css"

class App extends Component {

  render() {
    return (
      <div className ="bg-image">
         <header className="App-header">
        <Router>
        <Container fluid>
              <Row>
              <Col lg={2} id="sidebar-wrapper">      
                      <SideNavbar />
                </Col>
                <Route path = "/civs/:id" component = {()=> (<Col lg = {10}><MainPage/></Col>)}/>
                  
                </Row>

            </Container>
        </Router>
        </header>
        </div>
          
    );
  }
}
export default App;
