import React, { useContext } from 'react';
import CarouselSlide from './CarouselSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import '../../styles.scss';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';

const Carousel = () => {
    const { isCarouselLoading, carouselSlides, isMobileCarouselLoading, mobileCarouselSlides } = useContext(Context);
    // console.log('carousel slides', carouselSlides);
    if (isMobileCarouselLoading || isCarouselLoading) {
        return <Loader />
    }

    // If there are no slides to display, then do not render the component.
    if (!Array.isArray(carouselSlides) || (!Array.isArray(mobileCarouselSlides)) || (!carouselSlides.length || !mobileCarouselSlides.length)) {
        return null;
    }

  return (
    <div className='carousel'>
        <Swiper autoHeight={true} modules={[Navigation]} navigation>
            {mobileCarouselSlides.map((item) => {
                const { mobileId, mobileSlideTitle, mobileSlideBgImage, mobileSlideItem, mobileSlideDescription } = item;
                return (
                    <SwiperSlide key={mobileId}>
                        <CarouselSlide slideTitle={mobileSlideTitle} slideDescription={mobileSlideDescription} slideBgImage={slideBgImage} />
                    </SwiperSlide>
                )
            }}
            {carouselSlides.map((item) => {
                const { id, slideBgImage, slideTitle, slideDescription } = item;
                return (
                    <SwiperSlide key={id}>
                        <CarouselSlide slideTitle={slideTitle} slideDescription={slideDescription} slideBgImage={slideBgImage} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Carousel;
