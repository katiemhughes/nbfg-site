// import React, { useContext } from 'react';
import React from 'react';
// import Loader from '../Loader/Loader';
// import { Context } from '../../Context/Context';

const Moll = () => {
    // const { moll, isMollLoading } = useContext(Context);

    // if (isMollLoading) {
    //     return <Loader />
    // }
    // // console.log('about state', about);

    // const { aboutPageTitle, aboutPageDescription, aboutPageImage } = moll;

  return (
    <section className='meet' id='moll'>
        <div className='moll__text-content'>
            <h2 className='moll__title'>Moll title</h2>
            {/* <p className='moll__description' dangerouslySetInnerHTML={{ __html: aboutPageDescription }} /> */}
            <p className='moll__description'>Hello this is a Meet the Gang page</p>
        </div>
        {/* <div className='moll__image-content'>
            <img className='moll__image' src={aboutPageImage} alt={aboutPageTitle} />
        </div> */}
    </section>
  )
}

export default Moll;