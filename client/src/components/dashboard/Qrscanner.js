import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import './BarCodeScanner.css';
import CustomerSidebar from './CustomerSidebar';
import QrReader from 'react-qr-reader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPayment } from '../../actions/billpay';



// Add comment t ocheck the githup1
const Qrscanner = ({ createPayment }) => {
  const qrRef = useRef(null);
  const [description, setScanResultWebCam] = useState('');
  const [formData, setFormData] = useState({
    billAmount: '',
  });

  const { billAmount } = formData;

  const changeHandler = (e) => setFormData({ [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(billAmount, description);
    createPayment(billAmount, description);
  };

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
      console.log(description);
      console.log('Scan completed');
    }
  };

  return (
    <div>
    <CustomerSidebar/>
    <div className='scan-container'>
      <div className='hide'></div>
      <div className='qr-container'>
        <form action='#' onSubmit={(e) => submitHandler(e)}>
          <header>
            <div>Scan bill</div>
          </header>

          <div className='box01'>
            <QrReader
              delay={1000}
              style={{ width: '100%' }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
          </div>

          <div className='box02'>
            <h2>Bill Amount: {description}</h2>
          </div>

          <div className='field-qr'>
            <input
              type='text'
              name='billAmount'
              value={billAmount}
              onChange={(e) => changeHandler(e)}
            />
            <div className='label'>Enter your bill amount</div>
          </div>

          <div className='field-qr'>
            <textarea
              type='text'
              name='description'
              value={description}
              onChange={(e) => changeHandler(e)}
            />
            <div className='label'>Description</div>
          </div>

          <div className='field-btn'>
            <button>Purchase</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

Qrscanner.propTypes = {
  createPayment: PropTypes.func.isRequired,
};

export default connect(null, { createPayment })(Qrscanner);
