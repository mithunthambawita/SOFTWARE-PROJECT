import React, { useState,Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../Style/SignIn.css';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const SignIn  = ({login, isAuthenticated, user})=> {
  
 const [formData, setFormData] =  useState({
   email:'',
   passWord:''
 });
const {email,passWord} = formData;

 const changeHandler = (e) => 
    setFormData({ ...formData,[e.target.name]: e.target.value });
  


 const submitHandler = async(e) => {
    e.preventDefault();
    login(email, passWord);
  };

  
  if(isAuthenticated){
    if (user.role === "customer")
      return <Redirect to = '/main-menu'/>;
    else if (user.role === "admin")
      return <Redirect to = '/admin-page'/>;
   }
    

    return(
      <Fragment>
      <div className='m-container'>
        <div className='container'>
          <header>
            <div>
              master.PAY
              <i class='fas fa-paper-plane' />
            </div>
          </header>

          <div className='login'>
            <i class='fas fa-user-alt'></i>
          </div>
          <div className='login'>LOGIN</div>

         
            <form action='#' onSubmit={(e)=>submitHandler(e)}>
              
                <div className='field'>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e)=>changeHandler(e)}
                  />
                  <div className='label'>Email</div>
                </div>

                <div className='field'>
                  <input
                    type='passWord' 
                    name='passWord'
                    value={passWord}
                    onChange={(e)=>changeHandler(e)}
                  />
                  <div className='label'>Password</div>
                </div>
                <p>Don't have an account? <Link to='/sign-up'>Sign Up </Link></p>

                <div className='field'>
                  <button>LOGIN</button>
                </div>
              
            </form>
          </div>
        </div>
    </Fragment>
    );
    
};

 
SignIn.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  user: state.auth.user,
});

export default connect(mapStateToProps, { setAlert, login })(SignIn);
