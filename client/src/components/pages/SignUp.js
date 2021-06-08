import React from 'react';
import '../../App.css';
import '../Style/SignUp.css';

function SignUp() {
  return (
    <div className='m-container'>
      <div className='container'>
        <header>
          master.PAY
          <i class='fas fa-paper-plane' />
        </header>
        <div className='progress-bar'>
          <div className='step'>
            <p>Personal Ditails</p>
            <div className='bullet'>
              <span>1</span>
            </div>
            <div className='check fas fa-check'></div>
          </div>
          <div className='step'>
            <p>Bank Details</p>
            <div className='bullet'>
              <span>2</span>
            </div>
            <div className='check fas fa-check'></div>
          </div>
          <div className='step'>
            <p>Submit</p>
            <div className='bullet'>
              <span>3</span>
            </div>
            <div className='check fas fa-check'></div>
          </div>
        </div>

        <div className='form-outer'>
          <form action='#'>
            <div className='page'>
              <div className='title'>Personal Data:</div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>First Name</div>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>Last Name</div>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>Mobile Number</div>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>Personal Address</div>
              </div>

              <div className='field'>
                <button>Next</button>
              </div>
            </div>

            <div className='page'>
              <div className='title'>Bank Details</div>
              <div className='drop-down'>
                {/* <div className='label'></div> */}
                <select className='drop-down' required>
                  <option>People's Bank</option>
                  <option>Bank of Ceylon</option>
                  <option>RDB</option>
                  <option>NSB</option>
                </select>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>National ID</div>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>Account Name</div>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>Account Number</div>
              </div>

              <div className='field btns'>
                <button className='back-1 prev'>Back</button>
                <button className='next-1 next'>Next</button>
              </div>
            </div>

            <div className='page'>
              <div className='title'>Account info</div>
              <div className='field'>
                <input type='text' required />
                <div className='label'>Email Address</div>
              </div>

              <div className='field'>
                <input type='text' required />
                <div className='label'>User Name</div>
              </div>

              <div className='field'>
                <input type='password' required />
                <div className='label'>PassWord</div>
              </div>

              <div className='field'>
                <input type='password' required />
                <div className='label'>Confirm Your Password</div>
              </div>

              <div className='field btns'>
                <button className='back-2 prev'>Back</button>
                <button className='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
