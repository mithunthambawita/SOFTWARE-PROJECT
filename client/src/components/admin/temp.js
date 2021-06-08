


import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Style/Dashbord.css';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { getCurrentHistory } from '../../actions/billpay';
import Spinner from '../pages/Spinner';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Item from './Item';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

const Nav = styled.div`
  background:linear-gradient(180deg,rgb(134, 10, 10) 0%, rgb(185, 87, 87) 100%);
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: linear-gradient(180deg,rgb(134, 10, 10) 0%, rgb(185, 87, 87) 100%);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0%' : '0%')}; /*Edit*/
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const Adminpage = ({
  getCurrentProfile,
  getCurrentHistory,
  billpay: { billpay },
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCurrentHistory();
  }, [getCurrentProfile, getCurrentHistory]);

  return loading && profile === null ? (
       <Fragment>    
         <Spinner />
         
       </Fragment>
  ) : (
    <Fragment>
       {/* <Sidebar /> */}
      
      <div style={{ width: '100%'}, {marginLeft:'250px'}}>
      <Item/>
        <div className=''>
         
          
            {profile !== null ? (
              <Fragment>
                <div style={{ width: '100%'}, {marginLeft:'250px'}}>
                  mithun
                </div>
              </Fragment>
            ) : (
              <Fragment>
              
                <p>
                  You have not yet setup a profile, please add some information
                </p>

                <Link to='/create-profile' style={{ textDecoration: 'none' }}>
                  <div className='link-btn'> Create Profile </div>
                </Link>
              </Fragment>
            )}
          
        </div>
      </div>
    </Fragment>
  );
};

Adminpage.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getCurrentHistory: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  billpay: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  billpay: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, getCurrentHistory })(Adminpage);
