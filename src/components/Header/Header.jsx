
import React from 'react'
import '../../index.css'
import CV from '../Header/CV'
import codeimage from '../../Pictures/Code.jpeg'
import SocialLinks from './SocialLinks';
import './Header.css'



function Header() 
{ 
    return ( 
        <header className='header_container' id='Home'>
        <div>

            <h5>Hello, I'm</h5>  
            <h1> Akshay Kannan</h1>   
            <CV /> 

           
            
            <a href="#Contact" className='scroll_down'>Scroll Down</a> {/* Creates a hyperlink to an element within <html> that has an id attribute of contact */}
            <SocialLinks />
            <img src={codeimage} className='code'alt = 'Code' /> 

        </div> 
        </header> 

    );
    


}

export default Header;

