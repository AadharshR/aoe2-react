import React from "react";
import logo from "../assets/aoe2.gif";

const Loader = () => (
  <div>
    <img
      src={logo}
      style={{
        textAlign: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      alt="Loading..."
    />
    Loading...
  </div>
);

export default Loader;
