import React from 'react';
import '../../Style/Confirm.css';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth';

const Confirm  = (props) => {
  
  const {
    values: {
      firstName,
      lastName,
      mobileNumber,
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
 

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  if(props.isAuthenticated){
    if(props.user.role === 'customer')
      return <Redirect to = "/main-menu"/>
    else if(props.user.role === 'admin')
      return <Redirect to = "/admin-page"/>
   };

return(
  <div className='com-container'>
  <div className='cm-container'>
    <header>
      master.PAY
      <i class='fas fa-paper-plane' />
    </header>
    <div className='form-outer'>
      <form action='#'>
        <div className='page'>
          <div className='titleCom'>Account Confirmation</div>
          <div className = 'formOut'>
            <div className= 'fieldCom'>First name  :{firstName}</div>
            <div className= 'fieldCom'>Last name     :{lastName}</div>
            <div className= 'fieldCom'>Mobile number :{mobileNumber}</div>
            <div className= 'fieldCom'>Email address :{email}</div>
            <div className= 'fieldCom'>User name     :{userName}</div>
            <div className= 'fieldCom'>Password      :{passWord}</div>
            <div className= 'fieldCom'>Confirm password :{confirmPassWord}</div>
          </div>
        
          <div className='field btns'>
            <button className='back-1 prev' onClick={e=>back(e)}>
              Back
            </button>
            <button className='next-1 next' onClick={(e)=>Continue(e)}>
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

);
};
Confirm.propTypes = {
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

export default connect(mapStateToProps, { setAlert, register })(Confirm);