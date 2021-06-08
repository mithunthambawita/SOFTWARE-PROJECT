import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../pages/Spinner";
import { getProfileById } from "../../actions/profile";
import { Link } from "react-router-dom";
import "../Style/Profile.css";
import CustomerSidebar from "../dashboard/CustomerSidebar";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params._id);
  }, [getProfileById, match.params._id]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <CustomerSidebar/>
          <div className="p-container">
            <h1>
              <div>
                Welcome&nbsp;{auth.user.firstName}&nbsp;{auth.user.lastName}{" "}
              </div>
            </h1>
              <div className="pcontainer1">
              <div className="field-name">
                First Name: {auth.user.firstName}
              </div> 
              <div className="field-name">
                Last Name: {auth.user.lastName}{" "}
              </div>
              <div className="field-name">
                Mobile Number:{auth.user.mobileNumber}
              </div>
              {/* <div className="field-name">
                Bank details:{auth.user.bankDetails}
              </div> */}
              <div className="field-name">
                National ID: {auth.user.nationalId}
              </div>
              
              <div className="field-name">Email:{auth.user.email} </div>
              <div className="field-name">User Name:{auth.user.userName} </div>
              </div>

              </div>

              
              <div className="pcontainer2">
              <p>
                <ul>
                  profile photo 
                  </ul>
                  <i class="fas fa-user-tie"></i>                      
              </p>
              </div>

          {" "}
          {/* <div className="profile-btn1"> */}
            {/* <Link
              to="/main-menu"
              style={{ textDecoration: "none" }}
              className="link"
            >
              {" "}
              <i class="fas fa-user-edit"></i>
              &nbsp;Back To Dashboard{" "}
            </Link> */}
          {/* </div> */}
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <div className="profile-btn2">
                {/* {" "} */}
               
                <Link
                  to="/edit-profile"
                  style={{ textDecoration: "none" }}
                  className="link"
                >
                  Edit Profile
                </Link>
                
              </div>
            )}
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
