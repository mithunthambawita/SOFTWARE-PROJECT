import React, { Component } from 'react';
import '../../Style/SignUp.css';
import {Link} from 'react-router-dom';

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
   
  render() {
    const { values, handleChange } = this.props;

    return (
      <div className='user-container'>
        <div className='u-container'>
        <div className = 'u-cont-title'>
            <div className = 'u-title'>
            Personal Data
            </div>
       </div> 
          <div className='u-content'>
            <form action='#'>
              <div className='u-details'>
              <div className='u-input-box'>
              <span className='u-details'>First Name</span>
                  <input
                    type='text'
                    placeholder="First Name"
                    required
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                  />
              </div>

              <div className='u-input-box'>
              <span className='u-details'>Last Name</span>
                  <input
                    type='text'
                    placeholder="Last Name"
                    required
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                  />
                </div>

                <div className='u-input-box'>
                <span className='u-details'>Mobile Number</span>
                  <input
                    type='text'
                    placeholder="Mobile Number"
                    required
                    onChange={handleChange('mobileNumber')}
                    defaultValue={values.mobileNumber}
                  />
                </div>

                <p>Already have an account? <Link to='/sign-in'>Sign In </Link></p>
              </div>

              <div className='u-field'>
                  <button onClick={this.continue}>Next</button>
                </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;
