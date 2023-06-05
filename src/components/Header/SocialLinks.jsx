import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import './Header.css'


function SocialLinks(){
    return (

        //<a></a> is an in-built HTML element used for hyperlinking: Done using the special attribute 'href' 
        // Setting the 'target' attribute to "_blank" is done so that the hyperlink opens in a new tab
        //All the signs appear side-by-side since <a></a> is an in-line element not a block-level element


        <div className='SocialLinksContainer'> 

            <a href="https://github.com/akskan160103" target="_blank" rel="noreferrer"> <BsGithub /> </a> {/* When the target attribute is set to '_blank', it makes
            the link open up in a new tab */}
            <a href="https://www.linkedin.com/in/akshay-kannan-554668259/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://instagram.com/akskan_16" target="_blank" rel="noreferrer">< BsInstagram/></a>


        </div>
       
    );
}

export default SocialLinks;