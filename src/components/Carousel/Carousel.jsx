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
    isCarouselLoading, carouselSlides, newsPosts, isNewsPostsLoading,
  } = useContext(Context);
  console.log('newsPosts', newsPosts);
  console.log('isNewsPostsLoading', isNewsPostsLoading);
  console.log('carouselSlides', carouselSlides);

  // console.log('carousel slides', carouselSlides);
  if (isCarouselLoading) {
    return <Loader />;
  }

  // If there are no slides to display, then do not render the component.
  if (!Array.isArray(carouselSlides) || !carouselSlides.length) {
    return null;
  }

  return (
    <div className="carousel">
      <Swiper modules={[Navigation]} navigation>
        {carouselSlides.map((item) => {
          const {
            id, slideBgImage, slideTitle, slideSlug, slideDescription,
          } = item;
          return (
            <SwiperSlide key={id}>
              <CarouselSlide
                slideTitle={slideTitle}
                slideDescription={slideDescription}
                slideBgImage={slideBgImage}
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
