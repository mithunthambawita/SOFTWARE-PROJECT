import React, { Component } from 'react';
import '../../Style/SignUp.css';
import {Link} from 'react-router-dom';

export class AdminFormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
   
  render() {
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
                <div className='title'>Personal Data</div>
                <div className='field'>
                  <input
                    type='text'
                    required
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                  />
                  <div className='label'>First Name</div>
                </div>

                <div className='field'>
                  <input
                    type='text'
                    required
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                  />
                  <div className='label'>Last Name</div>
                </div>

                <div className='field'>
                  <input
                    type='text'
                    required
                    onChange={handleChange('mobileNumber')}
                    defaultValue={values.mobileNumber}
                  />
                  <div className='label'>Mobile Number</div>
                </div>

                <div className='field'>
                  <input
                    type='text'
                    required
                    onChange={handleChange('role')}
                    defaultValue={values.role}
                  />
                  <div className='label'>Role</div>
                </div>

                <p>Already have an account? <Link to='/sign-in'>Sign In </Link></p>
               

                <div className='field'>
                  <button onClick={this.continue}>Next</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminFormUserDetails;
