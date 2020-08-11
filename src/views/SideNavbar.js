import React, { Component } from "react";
import {  Link  } from 'react-router-dom'; 

import "../assets/Navbar.css";
import Loader from "../components/Loader/Loader";

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
    let civs = [
      { "id": 0, "string": "Aztecs" },
      { "id": 1, "string": "Berbers" },
      { "id": 2, "string": "Britons" },
      { "id": 3, "string": "Bulgarians" },
      { "id": 4, "string": "Burmese" },
      { "id": 5, "string": "Byzantines" },
      { "id": 6, "string": "Celts" },
      { "id": 7, "string": "Chinese" },
      { "id": 8, "string": "Cumans" },
      { "id": 9, "string": "Ethiopians" },
      { "id": 10, "string": "Franks" },
      { "id": 11, "string": "Goths" },
      { "id": 12, "string": "Huns" },
      { "id": 13, "string": "Incas" },
      { "id": 14, "string": "Indians" },
      { "id": 15, "string": "Italians" },
      { "id": 16, "string": "Japanese" },
      { "id": 17, "string": "Khmer" },
      { "id": 18, "string": "Koreans" },
      { "id": 19, "string": "Lithuanians" },
      { "id": 20, "string": "Magyars" },
      { "id": 21, "string": "Malay" },
      { "id": 22, "string": "Malians" },
      { "id": 23, "string": "Mayans" },
      { "id": 24, "string": "Mongols" },
      { "id": 25, "string": "Persians" },
      { "id": 26, "string": "Portuguese" },
      { "id": 27, "string": "Saracens" },
      { "id": 28, "string": "Slavs" },
      { "id": 29, "string": "Spanish" },
      { "id": 30, "string": "Tatars" },
      { "id": 31, "string": "Teutons" },
      { "id": 32, "string": "Turks" },
      { "id": 33, "string": "Vietnamese" },
      { "id": 34, "string": "Vikings" }
    ]
    this.setState({ civs: civs, loading: false });
  }
  onClick = async e => { };

  render() {
    console.log("props",this.props)
    return (
      <div>
        {this.state.loading ? <Loader /> : null}
        <nav
          className="side-nav"
          title="CIVILIZATIONS"
          scrollable={true}
          bg="light"
          expand="lg"
        >
          <div className = "navbar-title">
            <b >Civilizations</b>
            {this.state.civs.map(civ => (
                  <div className="card-nav">
                     <Link className = "civ-names" to={"/civs/" +civ.string}>{civ.string}</Link>
                  </div>     
            ))}
            </div>
        </nav>
   
      </div>
    );
  }
}

export default SideNavbar;
