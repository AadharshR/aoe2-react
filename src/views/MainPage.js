import "../assets/MainPage.css";

import React, { useEffect, useState } from "react";
import {
  useParams
} from "react-router-dom";

const MainPage = () => {
  const initialValue = []
  const [civs, setCivs] = useState(initialValue)
  useEffect(() => {
    async function fetchData() {
      let result = await (await fetch(`${process.env.REACT_APP_HOST_URL}/api/civs/`)).json()
      setCivs(result)
    }
    fetchData();
  }, [])
  let { id } = useParams();
  let ans = civs.map(value => {
    if (value.civ === id)

      return (
        <div className="content">

          <img src={require(`../assets/civs/CivIcon-${value.civ}.png`)} alt="logo" />
          <br />CIVILIZATION:{value.civ}
          <br></br>
          IDEAL OPENING: {value.ideal_opening}<br />
          FEUDAL OPENING :{value.transition} <br />
          CASTLE AGE TRANSITION: {value.castle_age}
          <br />
          IMPERIAL AGE: {value.imperial_age}
          <br />
          <div>

          </div>
        </div>)

  }})
  console.log("ans", ans)
return (

  <div>

    {ans}

  </div>
);
  }

export default MainPage;