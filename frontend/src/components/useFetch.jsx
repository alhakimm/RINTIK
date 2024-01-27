import {useState,useEffect} from 'react';

const useFetch = (url) =>{
    //this is a custom hook to fetch data from db or server
    //making it reusable by all

    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    // console.log("header: " + axios.defaults.headers.common['Authorization'])

    useEffect(() => {
        fetch(url, {headers: {Authorization: localStorage.FBIdToken}})
            .then(response => {
                console.log(response);
                if (!response.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
                setError(null);
            })
    }, [url]);

     return{ data, isLoading, error }
}

export default useFetch;