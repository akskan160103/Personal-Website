import React from 'react'
import classes from './Description.module.css'
function Description() {

   return (
    <div>
          <Button text="About me"/>
          <Button text="Experience" />
          <Button text="Projects" />
          <Button text="Hobbies" />
    </div>
  );

}

  function Button(props){
    
    return (
      <p className={classes.post}> {props.text}</p>
    );


  }
  

  
//Since we are going to export this component to other .jsx files
export default Description;