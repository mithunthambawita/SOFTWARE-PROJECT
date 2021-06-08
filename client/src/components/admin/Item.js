import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { getCurrentHistory } from '../../actions/billpay';
import { getUsers } from '../../actions/auth';
import '../Style/Adminitem.css';
import Adminitem from './Adminitem';

const  Item = ({
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

      
  return (
    <div className='admin-cards'>
      <div className='admin-cards__container'>
        <div className='admin-cards__wrapper'>
          <ul className='admin-cards__items'>
            <Adminitem
              src='images/img-17.png'
              text='Save your bill details '
              label='Payment history'
            />
            <Adminitem
              src='images/img-14.jpg'
              text= {'Check your expenses'}
              label='Adventure'
            />
          
            <Adminitem
              src='images/img-16.jpeg'
              text='Enjoy the  offers '
              label='Offers & pramotios'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
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

export default connect(mapStateToProps, { getCurrentProfile, getCurrentHistory, getUsers })(Item);
