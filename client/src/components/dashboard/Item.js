import React from 'react';
import '../Style/Customeritem.css';
import Customeritem from './Customeritem';

function Item() {
  return (
    <div className='customer-cards'>
      <div className='customer-cards__container'>
        <div className='customer-cards__wrapper'>

          <ul className='customer-cards__items'>
            <Customeritem
              src='images/img-18.jpg'
              text='How to protect yourself from covid-19 '
              label='Best Practices'
            />

            <Customeritem
              src='images/img-17.jpg'
              text='Advice for the public '
              label='Reduce Your Risk'
            />
           </ul>

        
        </div>
      </div>
    </div>
  );
}

export default Item;
