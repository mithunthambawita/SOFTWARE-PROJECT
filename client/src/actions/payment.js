import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from './types';
import setAuthToken from '../utils/setAuthToken';
//Load User


//Register user

  
//Login User
export const paypalPayment = (total, discription) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    total, discription
  });
  console.log(body);
  try {
    const res = await axios.post(
      'http://localhost:4000/api/user/login',
      body,
      config
    );
   
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

   
  } catch (err) {
    const errors = err.response.data.errors;
    // alert('bad sign up');
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


