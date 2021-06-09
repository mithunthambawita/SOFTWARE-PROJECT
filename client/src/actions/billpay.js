import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_HISTORY,
  HISTORY_ERROR,
  CLEAR_HISTORY
  } from './types';

    //Get Current users History
    export const getCurrentHistory  = () => async dispatch => {
      try {
         const res = await axios.get('/api/user/history/me');

         dispatch({
            type: GET_HISTORY,
            payload: res.data
         });
      } catch (err) {
         dispatch({
            type: HISTORY_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
         });
      }
  }  

//Bill payment
export const createPayment = (billAmount,description) => async (dispatch) => {
   const config = {
     headers: {
       'Content-Type': 'application/json',
     },
   };
 
   const body = JSON.stringify({
      billAmount,
      description,
   });
   console.log(body);
   try {
     const res = await axios.post(
       '/api/user/paybill',
       body,
       config
     );
    
     dispatch({
      type: GET_HISTORY,
      payload: res.data
   });

   dispatch(setAlert( 'Bill Payment Success' , 'success'));

 
     
   } catch (err) {
     const errors = err.response.data.errors;
     // alert('bad sign up');
     if (errors) {
       errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
     }
     dispatch({
      type:   HISTORY_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
   });

   dispatch(setAlert( 'Bill Payment Error' , 'danger'));
    
   }
 };
 
  //Get History by Id
  export const getHistoryById  = userId => async dispatch => {
    try {
       const res = await axios.get(`/api/user/history/${userId}`);

       dispatch({
          type: GET_HISTORY,
          payload: res.data
       });
    } catch (err) {
       dispatch({
          type: HISTORY_ERROR,
          payload: {msg: err.response.statusText, status: err.response.status}
       });
    }
}  

//Delete  profile

export const deleteHistory = () => async dispatch => {
   if (window.confirm('Are you sure? This can NOT be undone!')){
      try {
         await axios.delete('/api/user/paybill');

         dispatch({type: CLEAR_HISTORY});

         dispatch(setAlert('Your account has been permanatly deleted'));
      } catch (err) {
         dispatch({
            type: HISTORY_ERROR,
            payload:{mag: err.response.statusText, status: err.response.status}
         });
      }
   }
};