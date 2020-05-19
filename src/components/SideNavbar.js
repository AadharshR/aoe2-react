import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import styleCss from "./Navbar.css";
class SideNavbar extends Component {
  state = {
    civs: [],
    loading: false
  };
  // async componentDidMount() {}
  onClick = async () => {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    // const url = "https://aoe2.net/api/strings?game=aoe2de&language=en";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "cors");
    // const ans = await fetch(proxyUrl + url);
    // const json = await ans.json();
    this.setState({ civs: [{ string: "a" }] });
  };
  render() {
    return (
      <div>
        <Navbar className={styleCss.topnav} bg="dark" variant="light">
          <Navbar.Collapse id="basic-navbar-nav">
            <button onClick={this.onClick()}> Civilizations </button>
            {this.state.civs.map(civ => (
              <div class="card">
                <div class="card-body">
                  <b>
                    <h3 class="card-title">{civ.string}</h3>
                  </b>
                </div>
              </div>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SideNavbar;
