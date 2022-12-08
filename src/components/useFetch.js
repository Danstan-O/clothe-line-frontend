import { useState, useEffect } from "react";

const useFetch = (apiUrl) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch(apiUrl)
                .then((res) => {
                    // res.json()
                    if (!res.ok) {
                        throw Error('Could not fetch data from the resource!')
                    }
                    return res.json()
                })
                .then((data) => {
                    // console.log(data)
                    setData(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err.message)
                })
        }, 1000);
    }, [apiUrl])


    return ( 
        {data, isLoading, error}
     );
}
 
export default useFetch;