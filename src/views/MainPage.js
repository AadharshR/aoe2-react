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

          <div className ="unique-units">
            UNIQUE UNIT:
              <img src = {require(`../assets/unique-units/${value.civ}.png`)}/>
          </div>
          <br />
          <img src={require(`../assets/civs/CivIcon-${value.civ}.png`)} alt="logo" />
          {value.civ}
          <br></br>
          IDEAL OPENING: {value.ideal_opening}<br />
          <div className ="ages">
          <img src = {require(`../assets/ages/Feudal.png`)}/>
          {value.transition} <br />
          <img src = {require(`../assets/ages/Castle.png`)}/>
           {value.castle_age}
          <br />
          <img src = {require(`../assets/ages/Imperial.png`)}/>
         {value.imperial_age}
          <br />
          </div>
          <div>

          </div>
        </div>)

  })
return (

  <div>

    {ans}

  </div>
);
  }

export default MainPage;