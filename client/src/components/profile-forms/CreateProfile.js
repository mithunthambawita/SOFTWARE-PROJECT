import React, {Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import {Link,  withRouter} from 'react-router-dom';
import CustomerSidebar from "../dashboard/CustomerSidebar";
import Sidebar from '../admin/Sidebar';

const CreateProfile = ({isAuthenticated, 
                        createProfile, 
                        history, 
                        auth,
                        user }) => {
  const [formData, setFormData] = useState({
    image:'',
    distric: '',
    city: '',
    mobileNo: '',
    nationalId:'',

  });

  const {   
    distric,
    city,
    mobileNo,
    nationalId,
   } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const handlePhoto = (e) => {
      setFormData({...formData, image: e.target.files[0]});
  }

  const onSubmit = async(e) => {
      e.preventDefault();
      createProfile(formData, history);
     
  }

  return (
    <Fragment>
    <div className='log-container'>
      <div className='g-container'>
      <div className = 'cont-title'>
            <div className = 'title'>
              Create Your Profile
            </div>
       </div> 
        <div className='content'>
          <form action='#' onSubmit = {e => onSubmit(e)} encType="multipart/form-data">
            <div  className = 'user-details'>

            <div className='input-box'>
            <span className='details'>Profile Photo</span>
                <input
                  placeholder="Profile Photo"
                  type='file'
                  accept=".png, .jpg, .jpeg"
                  name='image'

                  onChange={(e) => handlePhoto(e)}
                />
              </div>


              <div className='input-box'>
              <span className='details'>Select Your Distric</span>
                <select
                  placeholder='Select Your Distric'
                  name='distric'
                  value={distric}
                  onChange={(e) => onChange(e)}
                >
                  <option value='0'>Select Your Distric</option>
                  <option value='Ampara'>Ampara</option>
                  <option value='Anuradhapura'>Anuradhapura</option>
                  <option value='Badulla'>Badulla</option>
                  <option value='Batticaloa'>Batticaloa</option>
                  <option value='Colombo'>Colombo</option>
                  <option value='Galle'>Galle</option>
                  <option value='Gampaha'>Gampaha</option>
                  <option value='Hambantota'>Hambantota</option>
                  <option value='Jaffna'>Jaffna</option>
                  <option value='Kalutara'>Kalutara</option>
                  <option value='Kandy'>Kandy</option>
                  <option value='Kegalle'>Kegalle</option>
                  <option value='Kilinochchi'>Kilinochchi</option>
                  <option value='Kurunegala'>Kurunegala</option>
                  <option value='Mannar'>Mannar</option>
                  <option value='Matale'>Matale</option>
                  <option value='Matara'>Matara</option>
                  <option value='Monaragala'>Monaragala</option>
                  <option value='Mullaitivu'>Mullaitivu</option>
                  <option value='Nuwara Eliya'>Nuwara Eliya</option>
                  <option value='Polonnaruwa'>Polonnaruwa</option>
                  <option value='Puttalam'>Puttalam</option>
                  <option value='Ratnapura'>Ratnapura</option>
                  <option value='Trincomalee'>Trincomalee</option>
                  <option value='Vavuniya'>Vavuniya</option>
                </select>
              </div>

                <div className='input-box'>
                <span className='details'>city</span>
                <input
                  type='text'
                  placeholder='city'
                  name='city'
                  value={city}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='input-box'>
              <span className='details'>Mobile No</span>
                <input
                  type='text'
                  placeholder='Mobile No'
                  name='mobileNo'
                  value={mobileNo}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='input-box'>
              <span className='details'>National ID</span>
                <input
                  type='text'
                  name='nationalId'
                  value={nationalId}
                  onChange={(e) => onChange(e)}
                />
              </div>

             
            
            </div>

            <div className='field'>
                  <Link to = '/main-menu'>
                <button  className='back-1 prev'>Back</button>
                </Link>
            </div>

              <div className='field'>
                <button   className='next-1 next'>Submit</button>
              </div>

          </form>
        </div>
      </div>
    </div>
    </Fragment>

  );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    isAuthenticated:PropTypes.bool,

};

const mapStateToProps = state => ({
  user: state.auth.user,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));
