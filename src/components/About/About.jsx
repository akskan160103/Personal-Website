import React from 'react'
import '../../index.css'
import headshot from '../../Pictures/Headshot.jpg'
import {FaUniversity} from 'react-icons/fa'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {MdSportsTennis} from 'react-icons/md'
import './About.css'

function About()
{

    return(
    
    <section id='About_Container'> {/* Block Level Element*/}
        
            <h5> Get To Know </h5>
            <h2> About Me </h2>

        <div className='Me_Container'>
        <img src={headshot} alt='Me_Container' className='Me' ></img> {/* In-Line element*/}
        </ div>

        <div className='Education_Container'>
            <FaUniversity />
            <h5>Education:</h5>
            <h6>BS in Computer Science and Economics Minor at The University of Michigan</h6>
        </div>

        <div className='Hobbies_Container'>
            <BsMusicNoteBeamed />
            <MdSportsTennis />

            <h5 className='Hobbies_Heading'>Hobbies:</h5>
            <ul className='Hobbies_Content'>
                <li>Keyboard - Finished all grades of Trinity's
                    Electronic Keyboard Certificate Exams  </li>
                <li>Table Tennis: Represented the U.A.E in a national tournament
                    in Bangalore
                </li>
            </ul>
        </div>


        <div> {/* Speak about technical Interests */}
        
        <p>Hey ! I'm 20 years old and interested in all things software ! I love collaborating with other people on projects/ideas, so reach out to me.
            I'm currently learning web development and working on some side projects over the summer ! </p>


        </div>

    </section>
    );
   

}

export default About; 