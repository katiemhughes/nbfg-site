import React from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
// import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div id="home">
            <Carousel />
            <About />
            {/* <Footer /> */}
        </div>
    )
}

export default Home;
