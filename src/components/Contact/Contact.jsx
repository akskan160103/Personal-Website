import React from 'react'
import '../../index.css'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'


function Contact()
{
    return (
    <section id='Contact'>
        <h5>Get In Touch</h5>
        <h2> Contact Me</h2>

        <div className='Contact_Flex_Container'>

            <div className='Email_Container'> 
                <AiOutlineMail />
                <h5>Email</h5>
                <h6>akskan@umich.edu</h6>
                <a href='mailto:akskan@umich.edu'>Send an email</a>
            </div>

            <div className='Whatsapp_Container'>
                <BsWhatsapp />
                <h5>Whatsapp</h5>
                <h6>+1 734-800-6075</h6>
                <a href='https://wa.me/17348006075'>Send a whatsapp message</a> 
            </div>

        </div>

    </section>
    ); 
}

export default Contact; 