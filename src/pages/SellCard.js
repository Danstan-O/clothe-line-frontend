import React from "react";
import { Link } from "react-router-dom"


function SellCard({ house, handleDeleteHouse }) {
    const apiHost = "http://localhost:9292"
    const imageStyle = {
        maxWidth: "400px",
        maxHeight: "400px",
        objectFit: "contain"
    }

    function handleHouseDelete(){
        console.log(`${apiHost}/houses/${house.id}`)
        fetch(`${apiHost}/houses/${house.id}`, {
            method: 'DELETE'
        })
        .then(result => result.json())
        .then(data => handleDeleteHouse(house))
    }

    return (
        <div key={house.id} className="houses-list bg-gray-800 p-2 rounded-lg my-4 max-w-xs">
            <img className="mb-4 w-full rounded-lg" src={house.image} alt="" style={imageStyle} />
            <div className="md:p-4 p-2">
                <h2 className="font-semibold text-gray-300 md:text-3xl text-xl">{house.category}</h2>
                <h3 className="text-blue-400 md:text-xl text-lg font-light">{house.location}</h3>
                <p className="text-white">{house.description.split(/\s+/).slice(0, 20).join(" ")}</p>
                <h3 className="md:text-xl text-lg text-green-500 font-medium">$ {house.price}</h3>
            </div>
            <button onClick={handleHouseDelete} class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Delete House
            </button>  
    </div>
    )
}

export default SellCards