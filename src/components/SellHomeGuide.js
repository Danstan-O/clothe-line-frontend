import { Link } from "react-router-dom";

const SellHomeGuide = ({listTitle}) => {
    return ( 
        <>
            <div className="house-list md:mb-32 mb-16">
                <h1 className="md:text-3xl text-2xl font-semibold my-2">{listTitle}</h1>
                <h2 className="font-light md:text-2xl text-xl text-blue-800">Here's is a guide if you wanna  
                    <Link to='/sell' className="text-green-600 font-medium"> sell</Link> your home
                </h2>
                <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6 md:space-y-0 space-y-8 md:my-8 my-4">
                    <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
                        <img src="https://static.rdc.moveaws.com/images/owners-sellers-ui/img-instant-offers-final.svg" alt="" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Get offers for your home</h3>
                            <p>Visit Seller’s Marketplace to find out how you can sell without listing or stay in your home while you finance the purchase of your next one</p>
                        </div>
                    </div>

                    <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
                        <img src="https://static.rdc.moveaws.com/images/owners-sellers-ui/img-myhome-final.svg" alt="" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Track your home value</h3>
                            <p>See your RealEstimate℠ valuation information over time compared to homes in your area.</p>
                        </div>
                    </div>

                    <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
                        <img src="https://static.rdc.moveaws.com/images/owners-sellers-ui/img-agent-final.svg" alt="" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Pick the right agent for you</h3>
                            <p>Answer a few questions and get a list of top agents in your area. Compare their costs and services, and choose the right agent for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
     );
}
 
export default SellHomeGuide;