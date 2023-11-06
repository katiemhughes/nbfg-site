import React from 'react';
import { Link } from 'react-router-dom';

function CarouselSlide({
  slideTitle, slideDescription, slideBgImage, slideSlug,
}) {
  return (
    <div className="slide" style={{ backgroundImage: `url(${slideBgImage})` }}>
      <div className="slide__content">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
        <Link to={`/news/articles/${slideSlug}`} className="content__btn">Learn More</Link>
      </div>
    </div>
  );
}

export default CarouselSlide;
