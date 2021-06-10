import React from 'react';
import '../../Style/Confirm.css';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth';

const AdminConfirm  = (props) => {
  
  const {
    values: {
      firstName,
      lastName,
      mobileNumber,
      role,
      email,
      userName,
      passWord,
      confirmPassWord,
    },
  } = props ;

  const Continue = async (e) => {
    e.preventDefault();
    // this.props.nextStep();

    // console.log(this.props.values);
    props.register(props.values, console.log(props.values));
      console.log(props.values)
     
   
  };
  console.log(props.isAuthenticated);
  // const register = (e) => {
  //   e.preventDefault();
  //   // PROCESS FORM //
  //   props.nextStep();
  // };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  // if(props.isAuthenticated){
  //   if(props.user.role === 'customer')
  //     return <Redirect to = "/main-menu"/>
  //   else if(props.user.role === 'admin')
  //     return <Redirect to = "/admin-page"/>
  //  };

return(
  <div className='user-container'>
  <div className='u-container'>
  <div className = 'u-cont-title'>
      <div className = 'u-title'>
        Confirm Your Information            
      </div>
   </div> 

     <div className='u-content'>
      <form action='#'>
        <div className='u-details'>
            <div className= 'fieldCom'>First name    :{firstName}</div>
            <div className= 'fieldCom'>Last name     :{lastName}</div>
            <div className= 'fieldCom'>Mobile number :{mobileNumber}</div>
            <div className= 'fieldCom'>Role          :{role}</div>
            <div className= 'fieldCom'>Email address :{email}</div>
            <div className= 'fieldCom'>User name     :{userName}</div>
            <div className= 'fieldCom'>Password      :{passWord}</div>
            <div className= 'fieldCom'>Confirm password :{confirmPassWord}</div>
        </div>

        <div className='u-field'>
           
            <button className='next-1 next' onClick={(e)=>Continue(e)}>
              Confirm
            </button>
          </div>

        
          <div className='u-field'>
            <button className='back-1 prev' onClick={e=>back(e)}>
              Back
            </button>
           
          </div>

      </form>
    </div>
  </div>
</div>

);
};
AdminConfirm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  user: state.auth.user,
});

export default connect(mapStateToProps, { setAlert, register })(AdminConfirm);