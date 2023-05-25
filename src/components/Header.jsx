import React from 'react'
import classes from './Description.module.css'

const WelcomeMessage = ["Hello World", "Welcome to this website"]

function Header() 
{ const a = (Math.random() > 0.5) ? WelcomeMessage[0] : WelcomeMessage[1]
    return (
        <div className={classes.Header}>

            <h1>{a}</h1>

        </div>

    );


}

export default Header;