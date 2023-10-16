import React from 'react';

function CarouselSlide({
  slideTitle, slideDescription, slideBgImage,
}) {
  return (
    <div className="slide" style={{ backgroundImage: `url(${slideBgImage})` }}>
      <div className="slide__content">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
        <a href="/" className="content__btn">Learn More</a>
      </div>
    </div>
  );
}

export default CarouselSlide;
