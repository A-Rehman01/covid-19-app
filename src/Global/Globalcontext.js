import React, { createContext, useEffect, useState } from 'react';

//create context

export const Globalcontext = createContext("");

const GlobalcontextProvider = ({ children }) => {

    const [apidata,setapiData] = useState('');
    
    //globaldata
    useEffect(() => {
        async function Fetchdata() {
            
            const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const data = await response.json();
            // console.log(response);
            // console.log(data.results[0].total_cases)
            setapiData(data.results[0])  //send object array
            
        }

        Fetchdata();
    },[])

    //countrydata
    useEffect(()=>{
        async function FetchCountrydata(){

            let counrtyresponse= await fetch('');
            
        }
        FetchCountrydata();
    },[]);



    return (
        <Globalcontext.Provider value={
            apidata
        } >
            {children}
        </Globalcontext.Provider>
    );

}
export default GlobalcontextProvider;