import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHistoryById } from '../../actions/billpay';
import { deleteHistory } from '../../actions/billpay';
import '../Style/Historybill.css';
import CustomerSidebar from '../dashboard/CustomerSidebar';

const Historybill = ({
  getHistoryById,
  deleteHistory,
  billpay: { billpay, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getHistoryById(match.params._id);
  }, [getHistoryById, deleteHistory, match.params._id]);
  console.log(billpay);
  return (
    <Fragment>
     
      {billpay === null || loading ? (
        <Fragment>
          {/* <Spinner /> */}
          <p>You have not yet setup a profile, please add some information</p>
        </Fragment>
      ) : (
        <Fragment>
          <CustomerSidebar/>
          <div>
            <table
            
              style={{
                width: '70%',
                border: '1px solid black',
                borderCollapse: 'collapse',
                marginLeft: '330px',
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
                      backgroundColor:'rgb(216, 121, 121)',
                    }}
                  >
                   Date & Time
                  </th>
                  <th
                    style={{
                      border: '1px solid black',
                      borderCollapse: 'collapse',
                      backgroundColor:'rgb(216, 121, 121)',
                    }}
                  >
                    Descripton
                  </th>
                  <th
                    style={{
                      border: '1px solid black',
                      borderCollapse: 'collapse',
                      backgroundColor:'rgb(216, 121, 121)',
                    }}
                  >
                     Bill Amount
                  </th>
                </tr>
              </thead>
              <tbody
                style={{
                  border: '1px solid black',
                  borderCollapse: 'collapse',
                }}
              >
                {billpay.map((bill) => {
                  return (
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
                          height: '80px',
                          backgroundColor:'#fdfcdc',
                        }}
                      >
                        {bill.date}
                      </td>
                      <td
                        style={{
                          border: '1px solid black',
                          borderCollapse: 'collapse',
                          height: '80px',
                          backgroundColor:'#fed9b7',
                        }}
                      >
                        {' '}
                        {bill.description}
                      </td>
                      <td
                        style={{
                          border: '1px solid black',
                          borderCollapse: 'collapse',
                          height: '80px',
                          backgroundColor:'#fdfcdc',
                        }}
                      >
                        {bill.billAmount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <div className='profile-btn3'>
              <Link
                to='/main-menu'
                style={{ textDecoration: 'none' }}
                className='link'
              >
                {' '}
                <i class='fas fa-user-edit'></i>
                &nbsp;Back To Dashboard{' '}
              </Link>
            </div> */}
            </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Historybill.propTypes = {
  getHistoryById: PropTypes.func.isRequired,
  deleteHistory: PropTypes.func.isRequired,
  billpay: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  billpay: state.billpay,
  auth: state.auth,
});

export default connect(mapStateToProps, { getHistoryById, deleteHistory })(
  Historybill
);
