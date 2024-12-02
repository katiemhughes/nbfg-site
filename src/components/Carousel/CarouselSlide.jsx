import React from 'react';
import { Link } from 'react-router-dom';

function CarouselSlide({
  slideTitle, slideDescription, slideBgImageTest, slideSlug,
}) {
  return (
    <div className="slide">
      <div className="slide__content">
        <div className="slide__text">
          <h2>{slideTitle}</h2>
          <p>{slideDescription}</p>
        </div>
        <picture>
          {slideBgImageTest && slideBgImageTest.filter((image) => !/mobile/i.test(image?.title)).map((image, index) => {
            const url = image?.file?.url;

            return (
              <source
                key={url || index}
                srcSet={url}
                media="(min-width:768px)"
              />
            );
          })}
          {slideBgImageTest && slideBgImageTest.filter((image) => /mobile/i.test(image?.title)).map((image, index) => {
            const url = image?.file?.url;

            return (
              <img key={url || index} src={url} alt={slideTitle} className="content__image" />
            );
          })}
        </picture>
        <Link to={`/news/articles/${slideSlug}`} className="content__btn">Learn More</Link>
      </div>
    </div>
  );
}

export default CarouselSlide;
