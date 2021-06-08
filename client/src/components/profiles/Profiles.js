import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../pages/Spinner';
import { getProfiles } from '../../actions/profile';
import { getUsers } from '../../actions/auth';


const Profiles = ({getProfiles,
                   getUsers,
                   profile: {profiles, loading},
                   auth: {users},
                   user
                  }) => {

    useEffect(() => {
        getProfiles();
        getUsers();
     },[ getProfiles, getUsers]);


   
return loading   ? (
    <Fragment>
        <Spinner/>
    </Fragment> 
    ): (
    <Fragment>
         { ( <div>
            <table
              style={{
                width: '90%',
                border: '1px solid black',
                borderCollapse: 'collapse',
                marginLeft: '80px',
                marginTop: '80px',
              }}
            >
              <thead
                style={{
                  border: '1px solid black',
                  borderCollapse: 'collapse',
                }}
              >
                <tr
                  style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    height: '40px',
                  }}
                >
                  <th
                    style={{
                      border: '1px solid black',
                      borderCollapse: 'collapse',
                    }}
                  >
                   Reg Date
                  </th>
                  <th
                    style={{
                      border: '1px solid black',
                      borderCollapse: 'collapse',
                    }}
                  >
                    Full Name
                  </th>
                  <th
                    style={{
                      border: '1px solid black',
                      borderCollapse: 'collapse',
                    }}
                  >
                   Email
                  </th>
                  <th
                    style={{
                      border: '1px solid black',
                      borderCollapse: 'collapse',
                    }}
                  >
                   Mobile Number
                  </th>
                </tr>
              </thead>
              <tbody
                style={{
                  border: '1px solid black',
                  borderCollapse: 'collapse',
                }}
              >
                {users.map((bill) => {
                  return bill.role === 'customer' ? (
                    <tr
                      style={{
                        border: '1px solid black',
                        borderCollapse: 'collapse',
                        height: '40px',
                        textAlign: 'center',
                      }}
                    >
                      <td
                        style={{
                          border: '1px solid black',
                          borderCollapse: 'collapse',
                        }}
                      >
                        {bill.date}
                      </td>
                      <td
                        style={{
                          border: '1px solid black',
                          borderCollapse: 'collapse',
                        }}
                      >
                       
                        {bill.firstName}&nbsp;{bill.lastName}
                      </td>

                      
                      <td
                        style={{
                          border: '1px solid black',
                          borderCollapse: 'collapse',
                        }}
                      >
                        {profiles.email}
                      </td>

                      <td
                        style={{
                          border: '1px solid black',
                          borderCollapse: 'collapse',
                        }}
                      >
                        {bill.mobileNumber}
                      </td>
                    

                    </tr>
                  ):(<div></div>);
                })}
              </tbody>
            </table>

          </div>)}
        </Fragment>
);
};     
    
 {/* <div></div>
            <div>
                {users.length > 0 ? (
                    users.map(user => (
                        <Profileitem key = {user._id}  user = {user} />
                 ))) :( <h4>No Profiles Found...</h4>)
                }
            </div> */}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    profiles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    user: state.auth.user,
    auth: state.auth,
});

export default connect(mapStateToProps, {getProfiles, getUsers })(Profiles)
