import React from 'react'
import Me from './logo.jpeg'
import 'tailwindcss/tailwind.css';
import ContactButton from './Contact';
const Topbar = () => {
    
  return (
    <div class='topbar flex justify-between items-center'>
        <h1 class='center font-bold'>Samuel Salgado</h1>
        <div class='right'><ContactButton /> </div>
    </div>
  )
}

export default Topbar