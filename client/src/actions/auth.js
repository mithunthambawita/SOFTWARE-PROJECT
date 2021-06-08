import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  GET_USERS,
  PROFILE_ERROR
} from './types';
import setAuthToken from '../utils/setAuthToken';
//Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:4000/api/post');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register user
export const register = ({
  firstName,
  lastName,
  mobileNumber,
  role,
  email,
  userName,
  passWord,
  confirmPassWord,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    mobileNumber,
    role,
    email,
    userName,
    passWord,
    confirmPassWord,
  });
  console.log(body);
  try {
    const res = await axios.post(
      'http://localhost:4000/api/user/register',
      body,
      config
    );
    // alert('Successfully sign up');
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    // alert('bad sign up');
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};



//Login User
export const login = (email, passWord) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    email,
    passWord,
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

    dispatch(loadUser());
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


//Get All users
export const getUsers  = () => async dispatch => {
  try {
     const res = await axios.get('http://localhost:4000/api/user/users');

     dispatch({
        type: GET_USERS,
        payload: res.data
     });

    

  } catch (err) {
     dispatch({
        type: PROFILE_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status}
     });
  }
}  



//LOGOUT /Clear Profile
export const logout = () => dispatch => {
  dispatch({type: CLEAR_PROFILE});
  dispatch({type: LOGOUT});
};