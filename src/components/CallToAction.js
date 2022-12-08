import { Link } from "react-router-dom";

const CallToAction = () => {
    return ( 
        <>
            <div className="sm:flex justify-center items-center bg-gradient-to-r from-cyan-200 to-blue-200 md:py-12 py-8 sm:px-0 px-6 md:mb-32 mb-16 rounded-xl sm:space-x-8">
                <p className="md:text-2xl text-xl font-medium sm:mb-0 mb-6">Post Your Home To</p>
                <Link to='/sell' className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 rounded-lg text-lg">
                    Get Started
                </Link>
            </div>
        </>
     );
}
 
export default CallToAction;