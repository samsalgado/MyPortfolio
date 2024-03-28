import React from 'react'
import 'tailwindcss/tailwind.css';
import x from './x.webp'
import youtube from './youtube.png';
import lnk from './lnk.png';
import github from './Octocat.png';
import { Button } from '@mui/material';
const Foote = () => {
    const handleButton = () => {
        window.location.href = 'https://samsalgado.github.io/SCP/'
    }
    const handleProject = () => {
        window.location.href = 'https://teaching-technology.netlify.app/'
    }
    const handleResume = () => {
        window.location.href = 'https://docs.google.com/document/d/1QV3Gdp7SA4RSjFpM75v-lLXqWo7Kgrxy/edit?usp=sharing&ouid=109384567562105595029&rtpof=true&sd=true'
    }
    const handleApps = () => {
        window.location.href = 'https://samsalgado.github.io/appideas/'
    }
   return (
    <>
        <div class='lefty'>
            <h2 class='start'>Links</h2>
            <Button onClick={handleButton}>Porfolio Project</Button>

            <Button onClick={handleProject}>Teaching Technology Homepage</Button>
            <Button onClick={handleResume}>Resume</Button>
            <Button onClick={handleApps}>App Ideas</Button>
        </div>
        <h2>Socials</h2>
        <a href='https://twitter.com/ttf123457'>
            <img src={x} alt='' width={100} height={100} />
        </a>
        <a href='https://github.com/samsalgado'>
            <img src={github} alt='' width={100} height={100}  />
        </a>
        <a href='https://www.youtube.com/@teachingtechnologyy'>
            <img src={youtube} alt='' width={100} height={100}  />
        </a>
        <a href='https://www.linkedin.com/in/blockchainmerlin'>
            <img src={lnk} alt='' width={100} height={100} />
        </a>     
    </>
  )
}

export default Foote