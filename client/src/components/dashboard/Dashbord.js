import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Style/Dashbord.css';
// import '../Style/DashboardAction.css';
import '../Style/Customeritem.css';
import '../Style/Customerpage.css';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { getCurrentHistory } from '../../actions/billpay';
import Spinner from '../pages/Spinner';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CustomerSidebar from './CustomerSidebar';
import Item from './Item';
import Cusnoproside from './Cusnoproside';


const Dashbord = ({
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
      <Cusnoproside/>
         <div className = 'customer-container'>
        {/* <div className = 'cu-container'>  */}
      <Item/>
        <div className=''>
        
            {profile !== null ? (
              <Fragment>
              <CustomerSidebar />
                <div className='D-field'>
                  <Link to='/qr-scanner' style={{ textDecoration: 'none' }}>
                    <button>
                      Scan QR Code &nbsp;
                      <i class='fas fa-qrcode'></i>
                    </button>
                  </Link>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className='nopro-field'>
                <p>
                  You have not yet setup a profile, please add some information
                </p>

                <Link to='/create-profile' style={{ 
                  textDecoration: 'center' ,
                  
                  }}>
                  <div className='link-btn'> Create Profile </div>
                </Link>
                </div>
              </Fragment>
            )}
          {/* </p>
        </div>
      </div> */}
      </div>
      {/* </div> */}
    </div>
    </Fragment>
  );
};

Dashbord.propTypes = {
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

export default connect(mapStateToProps, { getCurrentProfile, getCurrentHistory })(Dashbord);
