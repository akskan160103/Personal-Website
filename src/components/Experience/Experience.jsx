import React from 'react'
import '../../index.css'
import './Experience.css'

function Experience()
{
    return(
        <section id='Skills'>
            <h5>What skills do I have ?</h5>

            <div className='Experience_Container'>
                <h4>Experiences</h4>

             
                <h6>First Abu Dhabi Bank</h6>
                <h6>Cybersecurity Intern: May 2023 - August 2023</h6>
               

                <ul>
                    <li>Engaged with SOAR: Security Orchestration, Automation, and Response to enhance the efficiency of the bank's security systems. </li>
                    <li> Utilized Swimlane for Security Orchestration, automating repretive tasks and improving incident response times. </li>
                    <li> Wrote scripts in Python to facilitate the SOAR process.</li>
                    <li> Gained knowledge of vulnerability scanning tools, including hands-on experience with Nessus.</li>
                </ul>


                <h6>V1 Team: Fall 2022 - Present</h6>

                <ul>
                    <li>Organized the 'V1 Startup Fair' - one of the largest student-run career fairs - that took place on Nov. 16th 2022.
                        It attracted 400+ students, 17 high-growth startups, and over 30 offers extended.
                    </li>

                    <li> Worked on maintenance of the website as part of the platform sub-team.</li>
                    <li>Moderated V1 Connect - A regular talk series hosted by our club. </li> 

                </ul>


                
            </div>

            <div className='Project_Container'> 
                <h4>Projects</h4>

                <h6>TableVision</h6>
                <ul>
                    <li> Developed a flask-related API - 'Table Vision' utlizing the YOLOv5 framework.</li>
                    <li> Trained the model on a diverse dataset of images, featuring both occupied and un-occupied tables of varying sizes </li>
                    <li> The purpose of the model is to help students know the availability of free seats in their favorite study spots.</li>
                    <li> Eventually aim to deploy our product on a large scale, including at Universities . </li>

                </ul>

                <h6> Personal Website</h6>
                <ul>
                    <li> Designed a personal website, making use of the React.JS framework </li>
                    <li> Attained proficiency in core web technologies like: HTML, CSS, JavaScript.</li>
                    <li> Implemented modern UI/UX principles to ensure a user-friendly and responsive web interface</li>
                </ul>

               


            </div>
        </section>

    );
}

export default Experience;
