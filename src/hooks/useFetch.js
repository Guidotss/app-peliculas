import { useState,useEffect } from 'react'; 
import { getData } from '../films/index'; 



export const useFetch = () =>{

    const [data,setData] = useState(); 
    const [loading,setLoading] = useState( true );

    const getFilms = async ()  =>{
        const data = await getData(); 
        setData(data); 
        setLoading(false); 
    }

    useEffect(() =>{
        getFilms(); 
        setLoading(true);
    },[]);

    return {
        data,
        loading,
    }
}