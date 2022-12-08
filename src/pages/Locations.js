import React from 'react'



function Locations({houses, displayedHouses, filterHandler}){

    // Get uniq locations
    const location_info = houses.map(house => {
        return {value: house.location}
    })

    const uniq_locations = []

    location_info.forEach(location => {
        if(!uniq_locations.find(uniq_location => uniq_location.value === location.value)){
            uniq_locations.push(location)
        }
    })

    console.log("categories: ", uniq_locations)
    // Use the uniq locations to create options
    const location_options = uniq_locations.map(location => {
        return <option value={location.value} key= {location.id}>{location.value}</option>
    })

    return (
        <>
        <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
           <select 
               onChange={filterHandler}
                className="form-select form-select-lg mb-3
                appearance-none
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                <option defaultValue={"Select a Region"}>Select a Region</option>
                {location_options}
            </select>
            </div>
            </div>
        </>
    )
}

export default Locations