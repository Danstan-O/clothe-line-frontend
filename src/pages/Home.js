import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import HouseList from "../components/HouseList";
import SellHomeGuide from "../components/SellHomeGuide";
import useFetch from "../components/useFetch";

const Home = () => {
    const {data: houses, isLoading, error} = useFetch("http://localhost:9292/houses")


    return ( 
        <div className="">
            {/* { isLoading && <h4 className="text-blue-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>} */}
            <Hero />

            <div className="md:mx-16 mx-6">
                {/* filter purchase houses only */}
                <HouseList houses={houses} listTitle = "Buy A House" />

                {/* filter purchase houses only */}
                <SellHomeGuide listTitle = "Sell A House" />

                <CallToAction />
            </div>


        </div>
     );
}
 
export default Home;