import React from 'react';
import '../../App.css';
import { Button1 } from './Button1';
import { Button } from './Button';
import '../Style/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>EASY TRANSACTION</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button1
          className='btns'
          buttonStyle='btn--outline1'
          buttonSize='btn--large1'
        >
          SIGN UP
        </Button1>

        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          TO BE SAFE <i class='fas fa-shield-alt' />
        </Button>
        </div>
      
    </div>
  );
}

export default HeroSection;
