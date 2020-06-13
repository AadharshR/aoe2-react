import React, { Component } from "react";
import style from "./Navbar.css";
import Loader from "./Loader";
import Dropdown from "react-dropdown";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem
} from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// const Loader = () => <div>Loading...</div>;
// import { makeStyles } from "@material-ui/core/styles";

class SideNavbar extends Component {
  state = {
    civs: [],
    loading: true,
    isOpen: false
  };
  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  async componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://aoe2.net/api/strings?game=aoe2de&language=en";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "cors");
    const ans = await fetch(proxyUrl + url);
    const json = await ans.json();
    this.setState({ civs: json.civ, loading: false });
  }
  onClick = async e => {};
  render() {
    return (
      <div>
        {this.state.loading ? <Loader /> : null}
        <Navbar bg="light" expand="lg">
          <Nav
            className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <Nav pullRight>
              <Navbar.Collapse id="basic-navbar-nav">
                <Router>
                  <LinkContainer to="/home">
                    <NavItem href="/home" eventKey={1}>
                      CIVILIZATIONS
                    </NavItem>
                  </LinkContainer>
                </Router>
              </Navbar.Collapse>
            </Nav>
            <NavDropdown
              onMouseEnter={this.handleOpen}
              onMouseLeave={this.handleClose}
              open={this.state.isOpen}
              noCaret
              id="language-switcher-container"
            >
              <div className="sidebar-sticky" />
              {this.state.civs.map(civ => (
                <NavDropdown.Item id={civ.id} className="card-title">
                  {civ.string}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SideNavbar;
