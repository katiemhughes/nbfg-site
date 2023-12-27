import React, { useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
import Contact from '../Contact/Contact';
// import Enter from '../Enter/Enter';

function Home({ enter, setEnter }) {
  useEffect(() => {
    setTimeout(() => {
      setEnter(true);
    }, 5000);
  }, []);

  return (
    <div id="home">
      <div>Enter video</div>
      <a href="/">Enter link</a>
      {/* <Enter /> */}
      <Carousel />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
