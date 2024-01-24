import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/home');
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <p>Welcome to the THE FATHER'S CHURCH</p>
      <button onClick={redirectToHomePage} style={{backgroundColor: '#d49c04', color: '#000',}}>Go to Home Page</button>
    </div>
  );
};

export default Landing
