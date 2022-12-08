import React, { useState, useEffect } from "react";
import Card from "./Card";
import Locations from "./Locations";


function LocationCategory(){
    const [allHouses, setAllHouses] = useState([])
    const [displayedHouses, setDisplayedHouses] = useState([])
    const apiHost = "http://localhost:9292"

    const imageCSS = {
      width: "100%",
      maxWidth: "1240px",
      margin: "0 auto",
      paddingTop: "50px",
      paddingBottom: "100px",
       
      display: "grid",
       
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "auto",
      gridGap: "20px",
    }

    
    
    useEffect(()=>{
        fetch(`${apiHost}/houses`)
        .then((responce)=>responce.json())
        .then((data)=>{
          setAllHouses(data)
          setDisplayedHouses(data)
        })
    },[])

    function filterHandler(e){
      setDisplayedHouses(displayedHouses => {
        return (
          allHouses.filter(house => house.location === e.target.value)
        )
      })
    }
   
    return(
        <>
          <div style={{paddingTop: "50px"}}>
                <Locations key={allHouses.id} houses={allHouses} displayedHouses={displayedHouses} filterHandler={filterHandler}/>
          </div>
          
          <div style={imageCSS}>
            {displayedHouses.map((house) => (
              <Card key={house.id} house={house}/>
            ))} 
          </div>
        </>
    )
}

export default LocationCategory;