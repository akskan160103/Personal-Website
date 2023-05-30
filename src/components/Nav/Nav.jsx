import React from 'react';
import '../../index.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';
import {VscBook} from 'react-icons/vsc';


function Nav(){
    return(

        <div>
            <a href='#Home'><AiOutlineHome/></a>
            <a href='#About'><BsPersonFill/></a>
            <a href='#Projects'><VscBook/></a>
           
        </div>

    );
}

export default Nav;