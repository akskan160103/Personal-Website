import React from 'react'
import '../../index.css'
import CV from '../Header/CV'
import codeimage from '../../Pictures/Code.jpeg'


function Header() 
{ 
    return ( 
        <div>

            <h5>Hello, I'm</h5>  
            <h1> Akshay Kannan</h1>   
            <CV /> 

            <img src={codeimage} alt = 'Keyboard' /> 
            
            <a href="#contact">Scroll Down</a> {/* Creates a hyperlink to an element within <html> that has an id attribute of contact */}

            

            
            



            
            

        </div>

    );


}

export default Header;