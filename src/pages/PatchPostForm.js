import React, {useState} from 'react'

function PatchPostForm({ handlePostingNewHouse, sellerName}){
    const apiHost = "http://localhost:9292"
    const defaultState = {
        location: "",
        category: "",
        price: "",
        description: "",
        image: "",
        size_in_sqft: "",
        seller: sellerName
    }

    const [formData, setFormData] = useState(defaultState)

    function handleInputChange(e){
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value}))
    }

    function handleFormSubmit(e){
        fetch(`${apiHost}/houses`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(result => result.json())
        .then(data => {
            handlePostingNewHouse(data)
            setFormData(defaultState)
        })
    }

    return (
        <div class="p-10">
            <form class="w-full max-w-sm flex flex-col">
                <div class="md:flex md:justify-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Location
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="Enter Location" name="location" onChange={e => handleInputChange(e)} value={formData.location}/>
                    </div>
                </div>
                <div class="md:flex md:justify-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Category
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="Enter Category" name="category" onChange={e => handleInputChange(e)} value={formData.category} />
                    </div>
                </div>
                <div class="md:flex md:justify-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Price
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="number" placeholder="Enter Price" name="price" onChange={e => handleInputChange(e)} value={formData.price} />
                    </div>
                </div>
                <div class="md:flex md:justify-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Description
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="text" placeholder="Enter Description" name="description" onChange={e => handleInputChange(e)} value={formData.description} />
                    </div>
                </div>
                <div class="md:flex md:justify-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Image
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="url" placeholder="Upload Image link" name="image" onChange={e => handleInputChange(e)} value={formData.image} />
                    </div>
                </div>
                <div class="md:flex md:justify-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Size in Sqft
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="number" placeholder="Enter Size" name="size_in_sqft" onChange={e => handleInputChange(e)} value={formData.size_in_sqft} />
                    </div>
                </div>
                <div class="md:flex md:justify-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button onClick={handleFormSubmit} class="shadow bg-blue-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Post House
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PatchPostForm