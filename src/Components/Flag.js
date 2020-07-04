import React,{useState,useEffect} from 'react';

function Flag({countryName}){
    let[flag,setFlag]= useState(countryName);
    // setFlag((flag).toUppercase());
    // let co=countryName.Uppercase();
    console.log(flag);
    useEffect(()=>{
        async function FetchStatedata(){
            
            let response= await fetch('https://restcountries.eu/rest/v2/name/'+countryName);
            let data = await response.json();
            console.log(data[0].flag);
            setFlag(data[0].flag);
            
        }
        FetchStatedata();
    },[countryName])
    
    return(
        <div>
                <img src={flag} width={100} height={70}></img>
        </div>
    );
}

export default Flag;