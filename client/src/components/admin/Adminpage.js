import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Style/Dashbord.css';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { getCurrentHistory } from '../../actions/billpay';
import { getUsers } from '../../actions/auth';
import Spinner from '../pages/Spinner';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Sidebarnopro from './Sidebarnopro';
import Item from './Item';
import '../Style/Adminpage.css';


const Adminpage = ({
  getCurrentProfile,
  getUsers,
  getCurrentHistory,
  billpay: { billpay },
  auth: { user, users },
  profile: { profile, loading },
  profiles
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCurrentHistory();
    getUsers();
  }, [getCurrentProfile, getCurrentHistory, getUsers]);
 

  return loading && profile === null ? (
       <Fragment>    
         <Spinner />
         
       </Fragment>
  ) : (
    <Fragment>
       <Sidebarnopro />
      <div className = 'admin-container' >
      <div className = 'ad-container'>

      <Item/>
        <div >
         
          
            {profile !== null  && user.role === 'admin' ?(
              <Fragment>
                <Sidebar />
                <div style={{ width: '100%'}, {marginLeft:'250px'}}>
                 
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
     
      </div>
    </Fragment>
  );
};

Adminpage.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  getCurrentHistory: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  profiles: PropTypes.object.isRequired,
  billpay: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  profiles: state.profile,
  billpay: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, getCurrentHistory, getUsers })(Adminpage);
