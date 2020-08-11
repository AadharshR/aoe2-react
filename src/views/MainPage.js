import "../assets/MainPage.css";

import React, { useEffect, useState } from "react";
import {   
    useParams
  } from "react-router-dom";

 


const  MainPage = () => {
  const initialValue = []
  const [civs,setCivs] = useState(initialValue)
    useEffect(()=> {
      async function fetchData() {
        let result = await (await fetch(`${process.env.REACT_APP_HOST_URL}/api/civs/`)).json()    
        setCivs(result)
      }
      fetchData();
    },[])
    let { id } = useParams();
    console.log("civs")
     let ans = civs.map(value => {
      if(value.civ === id)
      {
        console.log()
       return (
       <div className = "content">
         
         <br/>Civilization:{value.civ}

         <div>

         </div>
        </div>)
      
     }})
    console.log("ans",ans)
    return (
      
      <div className = "bg-image">

         {ans}
  
      </div>
    );
  }

export default MainPage;