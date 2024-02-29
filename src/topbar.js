import React from 'react'
import Me from './logo.jpeg'
import './App.css';
import ContactButton from './Contact';
const Topbar = () => {
    
  return (
    <div className='topbar'>
        <h1 className='center'>Samuel Salgado</h1>
        <div className='left'><img src={Me} className='logo' alt='logo' /></div>
        <div className='right'><ContactButton /> </div>
    </div>
  )
}

export default Topbar