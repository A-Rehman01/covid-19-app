import React from 'react';
import './App.css';

//import components
import Header from './Components/Header';
import Maingrid from './Components/Maingrid'
import GlobalcontextProvider from './Global/Globalcontext';
import Country  from './Components/Country';

function App() {
  return (
    <GlobalcontextProvider >

      <Header />
      {/* <Maingrid /> */}
      <Country></Country>
    </GlobalcontextProvider>
  );
}

export default App;
