import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import style from "./Navbar.css";
import Loader from "./Loader";
// const Loader = () => <div>Loading...</div>;

class SideNavbar extends Component {
  state = {
    civs: [],
    loading: true
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
        <Nav
          className="col-md-12 d-none d-md-block bg-light sidebar"
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <div className={style.marginate}>
            {" "}
            {console.log(document.querySelector("style"))}
          </div>
          <div className="sidebar-sticky" />
          <Nav.Item>
            <Nav.Link onClick={e => this.onClick()}>Civilizations</Nav.Link>

            {this.state.civs.map(civ => (
              <h5 id={civ.id} className="card-title">
                {/* {console.log("here", civ)} */}
                {civ.string}
              </h5>
            ))}
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideNavbar;
