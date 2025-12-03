import React from 'react';
import { menu } from "../Data";

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <h1 className='heading'>
        Our <span>Menu</span>
      </h1>
      <div className='box-container'>
        {menu.map((item, index) => (
          <div className='box' key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <div className='price'>
              ${item.price.toFixed(2)}
            </div>
            <a href='#cart' className='btn'>Add to Cart</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
