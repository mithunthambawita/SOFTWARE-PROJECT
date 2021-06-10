import React, { Component } from 'react';
import '../../Style/SignUp.css';
import {connect} from 'react-redux';
import {setAlert} from '../../../actions/alert';
import PropTypes from 'prop-types';


class AdminAccount extends Component  {


 
  continue = (e) => {
    e.preventDefault();
    if(this.props.values.passWord !== this.props.values.confirmPassWord){
     this.props.setAlert('Password do not match', 'danger');
    }
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  signup = (e) => {
    console.log('Success');
  };

  render() {

    const { values, handleChange } = this.props;
    return (
      <div className='user-container'>
      <div className='u-container'>
      <div className = 'u-cont-title'>
          <div className = 'u-title'>
            Account Information            
          </div>
       </div> 
       <div className='u-content'>
          <form action='#'>
            <div className='u-details'>
          <div className='u-input-box'>
            <span className='u-details'>Email Address</span>
                <input
                  type='text'
                  placeholder="Email Address"
                  required
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                />
          </div>

          <div className='u-input-box'>
            <span className='u-details'>User Name</span>
                <input
                  type='text'
                  placeholder="User Name"
                  required
                  onChange={handleChange('userName')}
                  defaultValue={values.userName}
                />
          </div>

          <div className='u-input-box'>
            <span className='u-details'>Passwaord  <i class='fas fa-unlock-alt'></i></span>
                <input
                  type='Password'
                  placeholder="Passwaord"
                  required
                  onChange={handleChange('passWord')}
                  defaultValue={values.passWord}
                />
          </div>

          <div className='u-input-box'>
            <span className='u-details'>Confirm Passwaord</span>
                <input
                  type='Password'
                  placeholder="Confirm Passwaord"
                  required
                  onChange={handleChange('confirmPassWord')}
                  defaultValue={values.confirmPassWord}
                />
          </div>

            
            </div>

            <div className='u-field'>
              
                <button  onClick={this.continue}>
                  Next
                </button>
              </div>
              <div className='u-field'>
                <button  onClick={this.back}>
                  Back
                </button>
               
              </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}
AdminAccount.propTypes = {
  setAlert: PropTypes.func.isRequired
};
export default connect(null, {setAlert})(AdminAccount);
