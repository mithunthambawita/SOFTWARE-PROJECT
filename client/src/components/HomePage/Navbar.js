import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

function Navbar({ auth: { isAuthenticated, loading, user }, logout, USER }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const authLinks = (
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo-loged' onClick={closeMobileMenu}>
        <p>
          {' '}
          <h2>
            master.PAY &nbsp; <i class='fas fa-paper-plane' />
          </h2>
          <br /> Welcome {user && user.userName}
          &nbsp;
          <i className='fas fa-user' />
        </p>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <li className='nav-item'>
            <Link
              to='/main-menu'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Main menu
            </Link>
          </li>
        </li>

        <li>
          <Link
            to='/'
            // className='nav-links-mobile'
            className='nav-links'
            onClick={(closeMobileMenu, logout)}
          >
            <span>Sign out</span>&nbsp;
            <i class='fas fa-sign-out-alt' />
          </Link>
        </li>
      </ul>
    </div>
  );

  const adminLinks = (
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo-loged' onClick={closeMobileMenu}>
        <p>
          {' '}
          <h2>
            master.PAY &nbsp; <i class='fas fa-paper-plane' />
          </h2>
          <br /> Welcome {user && user.userName} ({user && user.role})
          &nbsp;
          <i className='fas fa-user' />
        </p>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
        
        </li>
        <li className='nav-item'>
          <li className='nav-item'>
            <Link
              to='/admin-page'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              admin menu
            </Link>
          </li>
        </li>

        <li>
          <Link
            to='/'
            // className='nav-links-mobile'
            className='nav-links'
            onClick={(closeMobileMenu, logout)}
          >
            <span>Sign out</span>&nbsp;
            <i class='fas fa-sign-out-alt' />
          </Link>
        </li>
      </ul>
    </div>
  );


  const guestLinks = (
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        master.PAY
        <i class='fas fa-paper-plane' />
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
            About Us
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
            Products
          </Link>
        </li>

        <li>
          <Link
            to='/sign-in'
            // className='nav-links-mobile'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <nav className='navbar'>
      {/* {isAuthenticated ? authLinks : guestLinks} */}

        {!loading && (
          <Fragment> {(() => {
            if (isAuthenticated) {
              if(user.role === 'customer'){
                return(
                  authLinks
                )
              }
              else if(user.role === 'admin'){
                return(
                  adminLinks
                )
              }
            } 
            else{
              return(guestLinks)
              
            }
          })()}
          
          
          </Fragment>
        )}

       
      </nav>
    </>
  );
}

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated:PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
