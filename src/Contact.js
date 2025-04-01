import React, {useState} from 'react';
import { Button } from '@mui/material';
const ContactButton = () => {
  const email = useState('samueljuansalgado@gmail.com');
  const subject = useState('');
  const body = useState('');

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Button  onClick={handleClick}>
      Contact Me
    </Button>
  );
};

export default ContactButton;
