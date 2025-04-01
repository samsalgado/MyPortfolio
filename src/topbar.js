import React from 'react';
import 'tailwindcss/tailwind.css';
import ContactButton from './Contact';

const Topbar = () => {
    
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', flex: 1 }}>Samuel Salgado</h1>
        <div style={{ marginLeft: 'auto' }}><ContactButton /></div>
    </div>
  )
}

export default Topbar;
