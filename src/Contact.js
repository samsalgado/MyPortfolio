import React from 'react';
import { Button } from '@mui/material';
const ContactButton = () => {
  const email = 'samueljuansalgado@gmail.com';
  const subject = '';
  const body = '';

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Button onClick={handleClick}>
      Contact Me
    </Button>
  );
};

export default ContactButton;
