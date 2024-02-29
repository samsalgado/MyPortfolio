import React from 'react'
import Me from './me.png'
const AboutMe = () => {
  return (
    <div className='contain'>
        <img src={Me} position='absolute' width='390' height={350} />
        <h1>About Me</h1>
        <p>My name is Samuel Salgado, a full-stack developer experienced in the niche of Data Science and Blockchain.</p>
             <p>I started my career in Marketing, so I have a holistic viewpoint on designing business infrastructure for growth.</p>
                 <p>I am a strategist, primed to provide innovative ideas and implementations for your next project.
</p>
    </div>
  )
}


export default AboutMe