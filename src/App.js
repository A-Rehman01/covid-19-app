import React,{useState} from 'react';
import './App.css';

//import components
import Header from './Components/Header';
import World from './Components/World'
import GlobalcontextProvider from './Global/Globalcontext';
import Dropdown from './Components/Dropdown'
import Footer from './Components/Footer';
import Safty from './Components/Safty';
import Corona from './Components/Corona';

function App() {
  const [value, setValue] = useState(0);
  
  if(value===0){
  return(
    
    <GlobalcontextProvider >
      
      <Header />
      <Corona/>
      
      <World />
      <Safty/>
      <Footer value={value} setValue={setValue}/>
    </GlobalcontextProvider>
  );
}
  else{
    return(
    <GlobalcontextProvider >
      <Header />
      <Corona/>
      
      <Dropdown />
      <Safty/>
      <Footer value={value} setValue={setValue}/>
    </GlobalcontextProvider>
  )  
}
}

export default App;
