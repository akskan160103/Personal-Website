import React from 'react';
import '../../index.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';
import {VscBook} from 'react-icons/vsc';
import './Nav.css'
import {useState} from 'react' /* Importing the 'useState' hook */


function Nav(){
    //activeNav is the current value of the state and setActiveNav is the function to update the value of the state:
    //The argument '#' passed into useState is the current value of the state
    const[activeNav, setActiveNav] = useState('#Home')
    return(
        <nav>
        <div>
            <a href='#Home' onClick={()=>setActiveNav('#Home')}className={activeNav==='#Home' ? 'active':' '}><AiOutlineHome/></a>
            <a href='#About_Container'onClick={()=>setActiveNav('#About')}className={activeNav==='#About' ? 'active':' '} ><BsPersonFill/></a>
            <a href='#Skills'onClick={()=>setActiveNav('#Experience')}className={activeNav==='#Experience' ? 'active':' '}><VscBook/></a>
           
           
        </div>
        </nav>

    );
}

export default Nav;

/* CSS pseudo-classes like :hover and :active are used to select elements having certain states
useState hook is used to add states to react components*/