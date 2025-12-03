import React from 'react';
import { review, quoteImg } from "../Data";

const Review = () => {
  return (
    <section className='review' id='review'>
      <h1 className='heading'>
        customer's <span>review</span>
      </h1>

      <div className='box-container'>
        {review.map((item, index) => (
          <div className="box" key={index}>
            {/* Quote icon */}
            <img src={quoteImg} alt='quote' className='quote' />

            {/* Feedback */}
            <p>{item.feedback}</p>

            {/* User image */}
            <img src={item.img} alt={item.name} className='user' />

            {/* User name */}
            <h3>{item.name}</h3>

            {/* Stars */}
            <div className='stars'>
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star-half-alt' />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
