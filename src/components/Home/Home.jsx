import React from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div id="home">
      <Carousel />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
