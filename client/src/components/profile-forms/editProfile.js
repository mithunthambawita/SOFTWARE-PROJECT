import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    distric: '',
    city: '',
    mobileNo: '',
    nationalId:'',

  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      distric: loading || !profile.distric ? '' : profile.distric,
      city: loading || !profile.city ? '' : profile.city,
      mobileNo: loading || !profile.mobileNo ? '' : profile.mobileNo,
      nationalId: loading || !profile.nationalId ? '' : profile.nationalId,
      
    });
  }, [
      getCurrentProfile,
      profile.distric,
      profile.city,
      profile.mobileNo,
      profile.nationalId,
      loading,
  ]);

  
  const {
    distric,
    city,
    mobileNo,
    nationalId,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <div className='editpro-container'>
        <div className='editcontainer'>
        <header>Edit Your Profile</header>
        <div className='editproform-outer'>
          <form action='#' onSubmit={(e) => onSubmit(e)}>
            <div className='page'>
            <div className='editprofield'>                <select
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
                <div className='editlabel'>District</div>
              </div>
              <div className='editprofield'>                <input
                  type='text'
                  name='city'
                  value={city}
                  onChange={(e) => onChange(e)}
                />
                <div className='editlabel'>City</div>
              </div>
              <div className='editprofield'>                <input
                  type='text'
                  name='mobileNo'
                  value={mobileNo}
                  onChange={(e) => onChange(e)}
                />
                <div className='editlabel'>Mobile No</div>
              </div>

              <div className='editprofield'>                <input
                  type='text'
                  name='nationalId'
                  value={nationalId}
                  onChange={(e) => onChange(e)}
                />
                <div className='editlabel'>National ID</div>
              </div>

             
              <div className='editprofield-btns'>
                <Link to=''>
                  <button className='back-1 prev'>Back</button>
                </Link>
                <button type='submit' className='next-1 next'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
