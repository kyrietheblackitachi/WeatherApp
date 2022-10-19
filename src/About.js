import React, { useEffect,useRef }  from 'react'
import poster from './images/poster.png'
function About(props) {
 
  return (
      <div ref={props.refProp}className='hide'>
        <div className='about-content'>
          <div className='poster'>
            <img src={poster}/>
          </div>
          <div className='bio'>
            <p>
            Hello! My name is Robert Tobechukwu,I am a person that loves innovating programs to solve problems. 
            Also love to learn more and more about the new technologies of this new world. I am very passionate about Software Development,and strive to better myself as a developer,and the development community as a whole.
            <br></br>
            experience.....
            <br></br>

            Outside development,In my free time, you’ll find me watching anime,Designing graphics,Playing basketball,video games and taking walks while listening to music(just joking you wont see me,i'll be in my room).
            </p>
            <button onClick={props.closeProp}>Back to Menu</button>
          </div>
        </div> 
      </div>
  )
}
export default About
