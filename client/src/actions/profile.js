import axios from 'axios';
import { setAlert } from './alert';
import {
   GET_PROFILE,
   GET_PROFILES,
   PROFILE_ERROR,
   CLEAR_PROFILE,
   ACCOUNT_DELETED,
  } from './types';
  


  //Get Current users Profile
  export const getCurrentProfile  = () => async dispatch => {
     dispatch({type: CLEAR_PROFILE});
      try {
         const res = await axios.get('/api/profile/me');

         dispatch({
            type: GET_PROFILE,
            payload: res.data
         });
      } catch (err) {
         dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
         });
      }
  }  

    //Get Profile by Id
    export const getProfileById  = userId => async dispatch => {
      try {
         const res = await axios.get(`/api/profile/${userId}`);

         dispatch({
            type: GET_PROFILE,
            payload: res.data
         });
      } catch (err) {
         dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
         });
      }
  }  

//Get All Profile
export const getProfiles  = () => async dispatch => {
   try {
      const res = await axios.get('/api/profile');

      dispatch({
         type: GET_PROFILES,
         payload: res.data
      });

      // dispatch({
      //    type: USER_LOADED,
      //    payload: res.data
      // });

      // dispatch({
      //    type: GET_PROFILE,
      //    payload: res.data
      // });

   } catch (err) {
      dispatch({
         type: PROFILE_ERROR,
         payload: {msg: err.response.statusText, status: err.response.status}
      });
   }
}  


//Create or Update profile

export const createProfile = (formDate, history, edit = false) => async dispatch => {
   try {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      }

      const res = await axios.post('/api/profile', formDate, config);

      dispatch({
         type: GET_PROFILE,
         payload: res.data
      });
     
      dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created' , 'success'));
     
      if(!edit){
         history.push('/');
      }
   

   } catch (err) {
      const errors = err.response.data.errors;
      // alert('bad sign up');
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
         type: PROFILE_ERROR,
         payload: {msg: err.response.statusText, status: err.response.status}
      });
   }
}



//Delete  profile

export const deleteAccount = () => async dispatch => {
   if (window.confirm('Are you sure? This can NOT be undone!')){
      try {
         await axios.delete('/api/profile');

         dispatch({type: CLEAR_PROFILE});
         dispatch({type: ACCOUNT_DELETED});

         dispatch(setAlert('Your account has been permanatly deleted'));
      } catch (err) {
         dispatch({
            type: PROFILE_ERROR,
            payload:{mag: err.response.statusText, status: err.response.status}
         });
      }
   }
};