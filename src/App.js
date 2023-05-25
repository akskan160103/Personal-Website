import React from 'react'
import Description from './components/Description';
import Header from './components/Header';
//import Header from './components/Header';



//React Components are functions which return an HTML element:
function App()
  { 
    return ( 
      <div>
        <Header />
        <Description />  
        
      </div>    
    ); 
   
  }
  
  export default App; //Allows the react component to be imported from another file:
