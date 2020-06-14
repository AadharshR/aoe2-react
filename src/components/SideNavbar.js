import React, { Component } from "react";
import "./Navbar.css";
import Loader from "./Loader";
import Dropdown from "react-dropdown";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem,
  ListGroup,
  Card
} from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// const Loader = () => <div>Loading...</div>;
// import { makeStyles } from "@material-ui/core/styles";

class SideNavbar extends Component {
  state = {
    civs: [],
    loading: true,
    isOpen: false,
    isExpanded: false
  };
  handleOpen = () => {
    this.setState({ isOpen: true });
    console.log("here");
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
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
        <Navbar className="side-nav" scrollable={true} bg="light" expand="lg">
          <Nav
            className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <NavDropdown title="CIVILIZATIONS">
              {this.state.civs.map(civ => (
                <NavDropdown.Item className="side-nav" id={civ.id}>
                  <Card style={{ width: "18rem" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item> {civ.string}</ListGroup.Item>
                    </ListGroup>
                  </Card>

                  <br />
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
