import React from 'react';
import '../../App.css';
import '../Style/Mainmenu.css';
import { Link } from 'react-router-dom';

function Mainmenu() {
  return (
    <div className='main-container'>
      <div className='container1'>
        <div className='button'>Scan the QR Code</div>
      </div>

      <div className='container2'>
        <div className='field'>Your Bill:</div>
        <div className='form'></div>
        <div className='field'>
          Bill Amount:
          <div className='form1'></div>
        </div>
      </div>
      <div className='container3'>
        <div className='field'>Payment Method:</div>
        <div className='label'>
          <select required>
            <option>People's Bank</option>
            <option>Bank of Ceylon</option>
            <option>RDB</option>
            <option>NSB</option>
          </select>
        </div>
        <div className='field'>Account Balance:</div>

        <button className='payment'>Pay Now</button>
        <button className='payment-cancel'>Cancel the payment</button>
        <Link to='/bank-d'>
          <button className='payment-cancel'>Customize Bank</button>
        </Link>
      </div>
    </div>
  );
}
export default Mainmenu;
