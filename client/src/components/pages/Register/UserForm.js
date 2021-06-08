import React, { Component } from 'react';

import FormUserDetails from './FormUserDetails';
import Account from './Account';
import Confirm from './Confirm';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    mobileNumber: '',
    personalAddress: '',
    email: '',
    userName: '',
    passWord: '',
    confirmPassWord: '',
  };
  //NEXT STEP
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //preve step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  //handle files changes
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      userName,
      passWord,
      confirmPassWord,
    } = this.state;

    const values = {
      firstName,
      lastName,
      mobileNumber,
      email,
      userName,
      passWord,
      confirmPassWord,
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      // case 2:
      //   return (
      //     <BankDetails
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       handleChange={this.handleChange}
      //       values={values}
      //     />
      //   );
      case 2:
        return (
          <Account
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <>
            <h1>Sign Up Completed</h1>

            <h1>Good Luck</h1>
          </>
        );
    }
  }
}

export default UserForm;
