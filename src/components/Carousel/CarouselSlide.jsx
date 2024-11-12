import React from 'react';
import { Link } from 'react-router-dom';

function CarouselSlide({
  slideTitle, slideDescription, slideBgImageTest, slideSlug,
}) {
  return (
    <div className="slide">
      <div className="slide__content">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
        <picture>
          {slideBgImageTest && slideBgImageTest.map((image, index) => {
            const url = image?.file?.url;
            const width = image?.file?.details?.image?.width;

            if (!url || !width) {
              return null;
            }

            return (
              <source
                key={url || index}
                srcSet={url}
                media={width > 768 ? '(min-width:800px)' : '(max-width:799px)'}
              />
            );
          })}
        </picture>
        <img src={slideBgImageTest[1].file.url} alt={slideTitle} className="content__image" />
        <Link to={`/news/articles/${slideSlug}`} className="content__btn">Learn More</Link>
      </div>
    </div>
  );
}

export default CarouselSlide;
