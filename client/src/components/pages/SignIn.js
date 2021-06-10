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
      <div className='log-container'>
      <div className = 'g-container'>
        <div className = 'cont-title'>
            <div className = 'title'>
              master.PAY 
              <i class='fas fa-paper-plane' /> &nbsp;
              LOGIN
            </div>
       </div> 
        <div class="content">
            <form action='#' onSubmit={(e)=>submitHandler(e)}>
              <div className = 'user-details'>
                <div className='input-box'>
                <span className='details'>Email</span>
                  <input
                    type='email'
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={(e)=>changeHandler(e)}
                  />
                </div>

                <div className='input-box'>
                <span className='details'>Password</span>
                  <input
                    type='passWord' 
                    placeholder="Password"
                    name='passWord'
                    value={passWord}
                    onChange={(e)=>changeHandler(e)}
                  />
                </div>
                <p>Don't have an account? <Link to='/sign-up'>Sign Up </Link></p>

               
              </div>
              <div className='field'>
                  <button>LOGIN</button>
                </div>
            </form>
            </div>
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
