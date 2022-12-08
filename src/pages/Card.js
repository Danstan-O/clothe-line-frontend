import React from "react";
import { Link } from "react-router-dom"


function Card({house}) {
    const imageStyle = {
        maxWidth: "400px",
        maxHeight: "400px",
        objectFit: "contain"
      }
    
    return(
    <div key={house.id} className="houses-list bg-gray-800 p-2 rounded-lg my-4 max-w-xs">
        <Link to={`/${house.id}`} >
            <img className="mb-4 w-full rounded-lg" src={house.image} alt="" style={imageStyle}/>
            <div className="md:p-4 p-2">
                <h2 className="font-semibold text-gray-300 md:text-3xl text-xl">{house.category}</h2>
                <h3 className="text-blue-400 md:text-xl text-lg font-light">{house.location}</h3>
                <p className="text-white">{house.description.split(/\s+/).slice(0, 20).join(" ")}</p>
                <h3 className="md:text-xl text-lg text-green-500 font-medium">$ {house.price}</h3>
            </div>
        </Link>
    </div>
)}

export default Card