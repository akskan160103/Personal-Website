import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


function SocialLinks(){
    return (

        //<a></a> is an in-built HTML element used for hyperlinking: Done using the special attribute 'href' 
        // Setting the 'target' attribute to "_blank" is done so that the hyperlink opens in a new tab
        //All the signs appear side-by-side since <a></a> is an in-line element not a block-level element


        <div>

            <a href="https://github.com" target="_blank" rel="noreferrer"> <BsGithub /> </a> 
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">< BsInstagram/></a>


        </div>
       
    );
}

export default SocialLinks;