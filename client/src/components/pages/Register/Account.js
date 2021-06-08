import React, { Component } from 'react';
import '../../Style/SignUp.css';
import {connect} from 'react-redux';
import {setAlert} from '../../../actions/alert'
import PropTypes from 'prop-types';


class Account extends Component  {


 
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
    const { values:{
      // passWord,
      // confirmPassWord,
    }
    } = this.props;

    const { values, handleChange } = this.props;
    return (
      <div className='m-container'>
        <div className='container'>
          <header>
            master.PAY
            <i class='fas fa-paper-plane' />
          </header>
          <div className='form-outer'>
            <form action='#'>
              <div className='page'>
                <div className='title'>Account Informations</div>

                <div className='field'>
                  <input
                    type='text'
                    required
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                  />
                  <div className='label'>Email Address</div>
                </div>
                <div className='field'>
                  <input
                    type='text'
                    required
                    onChange={handleChange('userName')}
                    defaultValue={values.userName}
                  />
                  <div className='label'>User Name</div>
                </div>
                <div className='field'>
                  <input
                    type='Password'
                    required
                    onChange={handleChange('passWord')}
                    defaultValue={values.passWord}
                  />
                  <div className='label'>
                    Passwaord&nbsp;&nbsp;&nbsp;
                    <i class='fas fa-unlock-alt'></i>
                  </div>
                </div>
                <div className='field'>
                  <input
                    type='Password'
                    required
                    onChange={handleChange('confirmPassWord')}
                    defaultValue={values.confirmPassWord}
                  />
                  <div className='label'>Confirm Passwaord</div>
                </div>

                <div className='field btns'>
                  <button className='back-1 prev' onClick={this.back}>
                    Back
                  </button>
                  <button className='next-1 next' onClick={this.continue}>
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Account.propTypes = {
  setAlert: PropTypes.func.isRequired
};
export default connect(null, {setAlert})(Account);
