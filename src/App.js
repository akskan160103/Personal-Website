import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About'; 
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';




//React Components are functions which return an HTML element:
function App()
  { 
    return (  
      <div>
             
            <Header />  
            <Nav />   
           <About /> 
            <Experience />   
            <Contact />         
        
      </div>       
       

     
    );   
  

  
   
  }
  
  export default App; //Allows the react component to be imported from another file:
