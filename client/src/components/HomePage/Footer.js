import React from 'react';
import '../Style/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the master.PAY-alat to receive our best product and pramotion
          deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>
              master.PAY <i class='far fa-paper-plane' />
              transaction flatform
            </Link>
            <Link to='/'>Since 2020</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>
              <i class='fas fa-phone-alt' />
              +714609390
            </Link>
            <Link to='/'>
              <i class='far fa-envelope' />
              ma.PAY@gmail.com
            </Link>
            <Link to='/'>
              <i class='fas fa-map-marker-alt' />
              @colombo,Srilanka
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Branches</h2>
            <Link to='/'>Colombo 10</Link>
            <Link to='/'>Anuradhapura</Link>
            <Link to='/'>Kurunagala</Link>
            <Link to='/'>Galle</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              master.PAY
              <i class='fas fa-paper-plane' />
            </Link>
          </div>
          <small class='website-rights'>master.PAY © 2020</small>
          <div class='social-icons'>
            <a
              href='https://www.facebook.com/'
              className='social-icon-link '
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              href=' https://www.instagram.com/accounts/login/'
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              href='https://www.youtube.com/'
              className='social-icon-link youtube'
              target='_blank'
              rel="noreferrer"
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              href='https://twitter.com/login?lang=en/'
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              rel="noreferrer"
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>

      <div class='feed-back'>
        <div>
          <Link to='./feed-back'>Feedback</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
