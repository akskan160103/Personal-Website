import React from 'react'
import Description from './components/Description';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks'; 




//React Components are functions which return an HTML element:
function App()
  { 
    return ( 
      <div>
        <Header />
        <Description />  
        <SocialLinks />

        
      </div>    
      

     
    );  
  

  
   
  }
  
  export default App; //Allows the react component to be imported from another file:
