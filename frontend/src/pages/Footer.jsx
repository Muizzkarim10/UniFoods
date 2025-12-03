import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='footer'>
      <div className='share'>
        <a href='#' className='fab fa-facebook-f'></a>
        <a href='#' className='fab fa-twitter'></a>
        <a href='#' className='fab fa-instagram'></a>
        <a href='#' className='fab fa-linkedin'></a>
        <a href='#' className='fab fa-pinterest'></a>
      </div>
      <div className='links'>
          <a href='#home'>home</a>
          <a href='#about'>about us</a>
          <a href='#menu'>menu</a>
          <a href='#products'>products</a>
          <a href='#review'>review</a>
          <a href='#contact'>contact</a>
          <a href='#blogs'>blogs</a>
      </div>
    </section>
    </>
  );
};

export default Footer;