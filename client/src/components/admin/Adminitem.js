import React from 'react';
import { Link } from 'react-router-dom';

function Adminitem(props) {
  return (
    <>
      <li className='admin-cards__item'>
        <Link className='admin-cards__item__link' to={props.path}>
          <figure className='admin-cards__item__pic-wrap' data-category={props.label}>
            <img
              className='admin-cards__item__img'
              alt='master.PAY'
              src={props.src}
            />
          </figure>
          <div className='admin-cards__item__info'>
            <h5 className='admin-cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Adminitem;