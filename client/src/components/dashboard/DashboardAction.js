
import React from 'react';
import '../Style/DashboardAction.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/profile';

export const DashboardAction = ({
  deleteAccount,
  profile: {
    profile: {
      user: {_id}
    },
 
  },
  billpay: { billpay, loading },
}) => {
  return (
    <div className='dash-action'>
      <div className='link-btn-view-profile'>
        <Link
          to={`/profile/${_id}`}
          style={{ textDecoration: 'none' }}
          className='link'
        >
          {' '}
          <i className='fas fa-user-circle text-primary' />
          &nbsp;View Profile{' '}
        </Link>
      </div>

      <div className='link-btn-edit-profile'>
        <Link
          to='/edit-profile'
          style={{ textDecoration: 'none' }}
          className='link'
        >
          {' '}
          <i class='fas fa-user-edit'></i>
          &nbsp;Edit Profile{' '}
        </Link>
      </div>

      <div className='link-btn-edit-account'>
        <Link
          to='/edit-info'
          style={{ textDecoration: 'none' }}
          className='link'
        >
          {' '}
          <i className='fas fa-user-circle text-primary' />
          &nbsp;Edit Account{' '}
        </Link>
      </div>

      <div className='link-btn-view-history'>
        <Link
          to={`/history/${_id}`}
          style={{ textDecoration: 'none' }}
          className='link'
        >
          {' '}
          <i class='fas fa-history'></i>
          &nbsp;Payment History{' '}
        </Link>
      </div>

      <div className='link-btn-Delete-account'>
        <Link
         onClick = {() => deleteAccount()}
          style={{ textDecoration: 'none' }}
          className='link'
        >
          <i class='fas fa-trash'></i>
          &nbsp;Delete Account{' '}
        </Link>
      </div>
    </div>
  );
};

DashboardAction.prototype = {
  profile: PropTypes.object.isRequired,
  billpay: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  billpay: state.profile
});

export default connect(mapStateToProps, {deleteAccount})(DashboardAction);
