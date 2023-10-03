// import React, { useContext } from 'react';
import React from 'react';
// import Loader from '../Loader/Loader';
// import { Context } from '../../Context/Context';

const Sophie = () => {
    // const { maracuya, isMaracuyaLoading } = useContext(Context);

    // if (isMaracuyaLoading) {
    //     return <Loader />
    // }
    // // console.log('maracuya state', maracuya);

    // const { maracuyaTitle, maracuyaDescription, maracuyaImage } = maracuya;

  return (
    <section className='meet' id='sophie'>
        <div className='meet__text-content'>
            <h2 className='meet__title'>Sophie title</h2>
            {/* <p className='maracuya__description' dangerouslySetInnerHTML={{ __html: maracuyaDescription }} /> */}
            <p className='meet__description'>Hello this is a Meet the Gang page</p>
        </div>
        {/* <div className='meet__image-content'>
            <img className='meet__image' src={maracuyaImage} alt={maracuyaTitle} />
        </div> */}
    </section>
  )
}

export default Sophie;