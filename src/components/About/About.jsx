import React from 'react'
import '../../index.css'
import headshot from '../../Pictures/Headshot.jpg'
import {FaUniversity} from 'react-icons/fa'
import {CgPiano} from 'react-icons/cg'
import {MdSportsTennis} from 'react-icons/md'
import {CgGym} from 'react-icons/cg'
import {BsFillInfoSquareFill} from 'react-icons/bs'
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

        <div className='Flex_Container'>
        <div className='Education_Container'>
            <FaUniversity />
            <h5>Education:</h5>
            <ul className='Education_Content'>
            <li>Gems Modern Academy - 2021</li>
            <li> BS in Computer Science and Economics Minor at The University of Michigan - 2025  </li>
            </ul> 
        </div>

        <div className='Age_Container'>
            <BsFillInfoSquareFill />
            <ul>
                <li>Age: 20 years old</li>
                <li> Class Standing: Rising Junior</li>
            </ul>
        </div>

        </div>

        <div className='Hobbies_Container'>
            <CgPiano />
            <MdSportsTennis />
            <CgGym />

            <h5 className='Hobbies_Heading'>Hobbies:</h5>
            <ul className='Hobbies_Content'>
                <li>Keyboard: I love playing the keyboard and have been playing for a long time ! I've completed all levels of the Trinity Electronic Keyboard Certificate Exams. I love picking up new songs and trying to play them by ear with frequent improvization. I'm currently trying to learn to recreate the succession opening track, which I find to be so melodiously rich.
                </li>
                <li>Table Tennis: I enjoy playing table tennis, or as some would call it - Ping Pong. I got so into it at a point that I even went to coaching at a Table Tennis Institute. I used to represent my high-school and also participated in a national tournament ! I haven't got a chance to play it properly for the last 4 years, but I do play it when I'm back home.</li>
                <li> Gymming: I started gymming this summer. I thought that I wouldn't enjoy it, but I'm finding it super fun ! I hope to maintain a consistent workout schedule over the next academic year, and make some solid gains !</li> 
            </ul>
        </div>


        <div className='General_Intro'> {/* Speak about technical Interests */}
        
        <p>Hey ! My name is Akshay Kannan, and I'm stufying CS at the College of Engineering. I'm interested in coding and would want to become a software developer in the future. I've decided to keep myself busy this summer which consists of: Taking courses for my minor, Do an internship, and work on personal projects. On top of this, I've also taught myself web development and am looking to eventually learn the basics of python. On the non-academic side, on top of pursuing my existing hobbies, I aim to learn the basics of cooking. I also want to be able to get my driving license !  </p>


        </div>

    </section>
    );
   

}

export default About; 