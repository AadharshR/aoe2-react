import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
class SideNavbar extends Component {
  state = {
    civs: []
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
    console.log("kson civ", json);
    this.setState({ civs: json.civ });
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">
            Civilizations
            {this.state.civs.map(civ => (
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{civ.string}</h5>
                </div>
              </div>
            ))}
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default SideNavbar;
