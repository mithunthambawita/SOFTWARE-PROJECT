import React from 'react';
import '../Style/Cards.css';
import CardItem from '../HomePage/CardItem';

function Products() {
  return (
    <div className='cards'>
      <h1>HERE ARE OUR PRODUCTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <h2>Vegetables</h2>
          <ul className='cards__items'>
            <CardItem
              src='images/veg1.jpg'
              text='Cucumber 200g'
              label='Rs.14.00'
            />

            <CardItem
              src='images/veg2.jpg'
              text='Bell pepper-500g'
              label='Rs.78.00'
            />
            <CardItem
              src='images/veg3.jpg'
              text='onion 250g'
              label='Rs.55.00'
            />
            <CardItem
              src='images/veg4.jpg'
              text='Celery-330g'
              label='Rs.71.00'
            />
            <CardItem
              src='images/veg5.jpg'
              text='Garlic-100g'
              label='Rs.120.00'
            />
          </ul>

          <h2>Fruits</h2>

          <ul className='cards__items'>
            <CardItem
              src='images/fruit1.jpg'
              text='Pashion-100g'
              label='Rs.45.00'
            />

            <CardItem
              src='images/fruit2.jpg'
              text='Kolikuttu-500g'
              label='Rs.95.00'
            />
            <CardItem
              src='images/fruit3.jpg'
              text='Woodapple-250g'
              label='Rs.33.00'
            />
            <CardItem
              src='images/fruit4.jpg'
              text='Papaw-1.5kg'
              label='Rs.123.00'
            />
            <CardItem
              src='images/fruit5.jpg'
              text='Pine-apple 1kg'
              label='Rs.220.00'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
