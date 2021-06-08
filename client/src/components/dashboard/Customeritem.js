import React from 'react';
import { Link } from 'react-router-dom';

function Customeritem(props) {
  
  return (
    <>
      <li className='customer-cards__item'>
        <Link className='customer-cards__item__link' to={props.path}>
          <figure className='customer-cards__item__pic-wrap' data-category={props.label}>
            <img
              className='customer-cards__item__img'
              alt='master.PAY'
              src={props.src}
            />
          </figure>
          <div className='customer-cards__item__info'>
            <h5 className='customer-cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Customeritem;