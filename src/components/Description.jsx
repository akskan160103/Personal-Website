import React from 'react'
import classes from './Description.module.css'
function Description() {
    return (
      <div className={classes.post}> 
        <p>About me</p>
        <p>Hobbies</p>
        <p>Student Orgs / Clubs</p>
        <p>Projects</p>
      </div>
    );
  }
  

  
//Since we are going to export this component to other .jsx files
export default Description;