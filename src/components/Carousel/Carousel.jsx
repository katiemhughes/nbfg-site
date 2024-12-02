/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import CarouselSlide from './CarouselSlide';
import 'swiper/scss';
import 'swiper/scss/navigation';
import '../../styles.scss';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';

function Carousel() {
  const {
    isCarouselLoading, carouselSlides,
  } = useContext(Context);

  if (isCarouselLoading) {
    return <Loader />;
  }

  // If there are no slides to display, then do not render the component.
  if (!Array.isArray(carouselSlides) || !carouselSlides.length) {
    return null;
  }

  const sortedSlides = carouselSlides.sort((a, b) => {
    const dateA = new Date(a.createdDateAndTime);
    const dateB = new Date(b.createdDateAndTime);
    return dateB - dateA;
  });

  return (
    <div className="carousel">
      <Swiper modules={[Navigation]} navigation>
        {sortedSlides
          .map((item) => {
            const {
              id,
              slideBgImageTest,
              slideTitle,
              slideSlug,
              slideDescription,
            } = item;

            return (
              <SwiperSlide key={id}>
                <CarouselSlide
                  slideTitle={slideTitle}
                  slideDescription={slideDescription}
                  slideBgImageTest={slideBgImageTest}
                  slideSlug={slideSlug}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Carousel;
