import React from 'react'
import SellCard from './SellCard'

function HousesOnSale({ houses, handleDeleteHouse }){
    console.log("houses on sale: ", houses)
    console.log("houses: ", houses)
    const house_components = houses.map(house => {
        return <SellCard key={house.id} house={house} handleDeleteHouse={handleDeleteHouse}/>
    })
    console.log("house components: ", house_components)
    
    return (
        <div className="flex w-full justify-around flex-wrap">
            {house_components}
        </div>
    )        
}

export default HousesOnSale

