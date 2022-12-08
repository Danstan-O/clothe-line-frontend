import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Footer from "./components/Footer"
import HouseDetails from "./components/HouseDetails";
import useFetch from "./components/useFetch";


const App = () => {
    // fetch data
    const {data: houses, error, isLoading} = useFetch("http://localhost:9292/houses")

    return ( 
        <>
            <BrowserRouter>
                <div className="App m-0 p-0">
                    <Navbar />

                    <Routes>
                        <Route 
                            path='/' 
                            element={ <Home houses={houses} error={error} isLoading={isLoading}/>} 
                        />
                        <Route 
                            path='/:id' 
                            element={ <HouseDetails houses={houses} />} 
                        />
                        <Route path='/buy' element={ <Buy />} />
                        <Route path='/sell' element={ <Sell />} />
                        <Route path='/contact' element={ <Contact />} />
                        
                    </Routes>
                    <Footer/>
                </div>
            
            </BrowserRouter>
            
            
            
        </>
     );
}
 
export default App;