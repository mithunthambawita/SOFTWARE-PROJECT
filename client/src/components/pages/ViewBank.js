import React from 'react';
import '../../App.css';
//import '../Style/BankD.css';
import { Link } from 'react-router-dom';

function ViewBank() {
  return (
    <div className='m-container'>
      <div className='container'>
        <div className='progress-bar'>
          <div className='step'>
            <h1>Bank Details</h1>
          </div>
        </div>

        <div className='form-outer'>
          <form action='#'>
            <div className='page'>
              <div className='field'>
                <div className='label'>Bank Name </div>
              </div>

              <div className='field'>
                <div className='label'>Account Number</div>
              </div>

              <div className='field'>
                <div className='label'>Current Balance</div>
              </div>

              <div className='field btns'>
                <Link to='/bank-d'>
                  <button className='next-1 next' type='button'>
                    BACK
                  </button>
                </Link>
              </div>
            </div>

            <div className='page'></div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ViewBank;
