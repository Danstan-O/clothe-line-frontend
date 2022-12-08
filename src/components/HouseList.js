import { Link } from "react-router-dom";
const HouseList = ({houses, listTitle}) => {

    return ( 
        <div>
            <div className="house-list md:mb-32 mb-16">
                <h1 className="md:text-3xl text-2xl font-semibold my-2">{listTitle}</h1>
                <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6">
                    {houses.slice(0, 3).map((house) => (
                        <div key={house.id} className="houses-list bg-gray-800 shadow-xl hover:shadow-2xl p-2 rounded-lg my-4">
                            <Link to={`/${house.id}`} >
                                <img className="mb-4 w-full rounded-lg" src={house.image} alt="" />
                                <div className="md:p-4 p-2">
                                    <h2 className="font-semibold text-gray-300 md:text-3xl text-xl">{house.category}</h2>
                                    <h3 className="text-blue-400 md:text-xl text-lg font-light">{house.location}</h3>
                                    <p className="text-white">{house.description.split(/\s+/).slice(0, 20).join(" ")}</p>
                                    <h3 className="md:text-xl text-lg text-green-500 font-medium">$ {house.price}</h3>
                                </div>
                            </Link>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default HouseList;