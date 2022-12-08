import { Link } from "react-router-dom";
// import HeroImg from "../assets/hero.jpg"

const Hero = () => {
    return ( 
        <div>
            <div className="relative md:mb-16 mb-8">
                <div className="">
                    <img 
                        className="hero-image rounded-md" 
                        src="http://www.slidebackground.com/uploads/real-estate-background/real-estate-homebuy-home-banner-background-homebuym-1.jpg" 
                        alt="Hero here.." />
                </div>
                <div className=" flex flex-col justify-center">
                    <h1 className="title-on-image lg:text-7xl md:text-4xl text-3xl text-gray-800 font-bold md:mb-32 mb-12 ">Discover a place you'll love to live</h1>
                    <div className="text-on-image absolute md:space-x-4 md:text-2xl text-xl  text-center font-medium space-x-4">
                        <Link
                            className="bg-white hover:bg-gray-800 hover:text-white md:px-8 md:py-4 px-4 py-2 rounded-md" to='/buy'>
                            Buy 
                        </Link>
                        <Link
                            className="bg-green-400 hover:bg-green-500 hover:text-gray-100 md:px-8 md:py-4 px-4 py-2 rounded-md" to='/sell'>
                            Sell 
                        </Link>
                    </div>
                </div> 

            </div>           
        </div>
     );
}
 
export default Hero;