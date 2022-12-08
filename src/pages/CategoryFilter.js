import React from 'react'

function CategoryFilter({categories, displayedCategories}){

    // Get uniq categorys
    const category_info = categories.map(house => {
        return {value: house.category}
    })

    const uniq_category = []

    category_info.forEach(category => {
        if(!uniq_category.find(uniq_category => uniq_category.value === category.value)){
            uniq_category.push(category)
        }
    })

    console.log("categories: ", uniq_category)
    // Use the uniq categorys to create options
    const category_options = uniq_category.map(category => {
        return <option value={category.value} key= {category.id}>{category.value}</option>
    })

    return (
        <>
            {category_options}
        </>
    )
}

export default CategoryFilter