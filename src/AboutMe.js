import React from 'react'
import Me from './me.png'
import "./App.css";
const AboutMe = () => {
  return (
    <div className='contain'>
        <img src={Me} alt='Me' position='absolute' width='390' height={350} />
        <h1 className="title">About Me</h1>
        <p>My name is Samuel Salgado, a full-stack developer and SEO Strategist.
</p>
<p>I have experience in sales and marketing, specifically in SEO(5+ years), WordPress and other no-code development and implementing data-driven marketing solutions for business growth.</p>

<p>I am a strategist, ready to provide innovative ideas and implementations for your next project.
</p>
    </div>
  )
}


export default AboutMe