import React, { useState, useEffect } from "react";
import Card from "./Card";
import CategoryFilter from "./CategoryFilter";
function Category(){
    const [categories, setCategories] = useState([])
    const [displayedCategories, setDisplayedCategories] = useState([])
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
          setCategories(data)
          setDisplayedCategories(data)
        })
    },[])

    function filterHandler(e){
      setDisplayedCategories(displayedCategories => {
        return (
          categories.filter(house => house.category === e.target.value)
        )
      })
    }
   

    return(
        <>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a Region</label>
            <select onChange={filterHandler} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <CategoryFilter key={categories.id} categories={categories} displayedCategories={displayedCategories}/>
            </select>
        <div style={imageCSS}>
        {displayedCategories.map((house) => (
          <Card key={house.id} house={house}/>
        ))} 
        </div>
        </>
    )
}

export default Category;