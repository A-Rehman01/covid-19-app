import React, { createContext, useEffect, useState } from 'react';

//create context

export const Globalcontext = createContext("");

const GlobalcontextProvider = ({ children }) => {

    const [apidata,setapiData] = useState('');
    const [apidatacountry,setapiDatacountry] = useState([{}]);
    
  
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

            //overallcountry
            let counrtyresponse= await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');
            const countdata = await counrtyresponse.json();
            
            // console.log(countdata)
            setapiDatacountry(countdata);
        }
        FetchCountrydata();
    },[]);



    return (
        <Globalcontext.Provider value={
         {apidata,apidatacountry}    
        } >
            {children}
        </Globalcontext.Provider>
    );

}
export default GlobalcontextProvider;