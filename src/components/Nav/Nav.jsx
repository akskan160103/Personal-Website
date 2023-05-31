import React from 'react';
import '../../index.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';
import {VscBook} from 'react-icons/vsc';


function Nav(){
    return(
        <Nav>
        <div>
            <a href='#Home'><AiOutlineHome/></a>
            <a href='#About'><BsPersonFill/></a>
            <a href='#Experience'><VscBook/></a>
           
           
        </div>
        </Nav>

    );
}

export default Nav;