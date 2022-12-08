import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const HouseDetails = () => {
    const { id } = useParams();
    const {data: house, isLoading, error} = useFetch("http://localhost:9292/houses/" + id);

    return ( 
        <div className="md:m-24 m-6">
            {/* test house details with id */}
            <h1 className="md:text-3xl text-xl font-semibold md:mb-8 mb-4 text-gray-900">House Details</h1> 
            { isLoading && <h4 className="text-blue-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>}
            {house && (
                <div>
                    <div className="md:flex rounded-xl bg-gray-800 md:p-8 p-6">
                        <div>
                            <h2 className="mb-2 font-semibold md:text-4xl text-2xl text-gray-300">{house.category}</h2>
                            <p className="mb-4 text-light text-blue-400 md:text-2xl text-xl">{house.location}</p>
                            <img className="mb-4 w-full rounded-lg" src={house.image} alt="" />
                        </div>
                        <aside className="md:p-8 md:mt-12">
                            <p className="text-gray-400 md:text-xl text-lg mb-4">
                                <span className="text-blue-500 font-semibold">Size: </span><br /> 
                                {house.size_in_sqft} sqrft
                            </p>
                            <p className="md:text-2xl font-light text-white my-8">
                            <span className="text-blue-500 font-semibold">House Description: </span><br /> 
                                {house.description}
                            </p>
                            <p className="my-2 font-medium text-green-600 md:text-xl text-lg mb-4">
                                <span className="text-blue-500 font-semibold">Price: </span><br /> 
                                $ {house.price}
                            </p>
                            <button className="px-4 py-3 rounded-md bg-blue-400 hover:bg-blue-500 font-medium my-4">
                                Book Now
                            </button>
                        </aside>
                    </div>
                </div>

            )}


        </div>
     );
}
 
export default HouseDetails;