import React, { useEffect, useState } from "react";
import PatchPostForm from "./PatchPostForm";
import HousesOnSale from "./HousesOnSale";

function Sell () {
  const [sellerHouses, setSellerHouses] = useState([])
  const apiHost = "http://localhost:9292"
  const sellerName = "vincent"

  useEffect(()=>{
    fetch(`${apiHost}/sellers/2`)
    .then(result => result.json())
    .then(data => {
      setSellerHouses(data.houses.map(house => (
        {
          ...house,
          location: house.location.location,
          category: house.category.category
        }   
      )))
    })
  }, [])

  function handlePostingNewHouse(newHouse){
    setSellerHouses(sellerHouses => ([...sellerHouses, newHouse]))
  }

  function handleDeleteHouse(deletedHouse){
    setSellerHouses(sellerHouses.filter(house => house.id !== deletedHouse.id))
  }

  return (
    <div className="flex flex-col">
      <PatchPostForm handlePostingNewHouse={handlePostingNewHouse} sellerName={sellerName}/>
      <div className="flex my-10">
        <HousesOnSale houses={sellerHouses} handleDeleteHouse={handleDeleteHouse}/>
      </div>
    </div>
  )
}

export default Sell;
