import React from 'react';
import '../../App.css';
//import '../Style/BankD.css';
import { Link } from 'react-router-dom';

function BankD() {
  return (
    <div className='m-container'>
      <div className='container'>
        <div className='progress-bar'>
          <div className='step'></div>
          <div className='step'>
            <h1>Bank Details</h1>

            <div className='check fas fa-check'></div>
          </div>
          <div className='step'>
            <div className='check fas fa-check'></div>
          </div>
        </div>

        <div className='form-outer'>
          <form action='#'>
            <div className='page'>
              <div className='field'>
                <div className='label'> </div>
                <select required>
                  <option>People's Bank</option>
                  <option>Bank of Ceylon</option>
                  <option>RDB</option>
                  <option>NSB</option>
                </select>
              </div>

              <div className='field'>
                <Link to='/view-bank'>
                  <button type='button'>VIEW BANK</button>
                </Link>
              </div>

              <div className='title'>
                <h3>Need to add a new Bank</h3>
              </div>

              <div className='field'>
                <button>ADD BANK</button>
              </div>
            </div>

            <div className='page'>
              <div className='title'>ADD YOUR BANK</div>
              <div className='field'>
                <div className='label'></div>
                <select required>
                  <option>Commercial</option>
                  <option>HNB</option>
                  <option>Nation's Trust</option>
                  <option>Seylan</option>
                </select>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>National ID</div>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>Name in the Bank</div>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>Account Number</div>
              </div>

              <div className='field btns'>
                <button className='next-1 next'>Add Bank</button>
              </div>
            </div>

            <div className='page'></div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default BankD;
