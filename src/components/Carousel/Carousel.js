import React, { useState, useEffect } from 'react';
import { client } from '../../Client';

const Carousel = () => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);

    const getCarouselSlides = async () => {
        try {
            const response = await client.getEntries({ content_type: 'homepageCarousel' });
            console.log('response', response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCarouselSlides();
    }, [getCarouselSlides]);

  return (
    <div>
        <h1>What we've been up to recently</h1>
    </div>
  )
}

export default Carousel;
