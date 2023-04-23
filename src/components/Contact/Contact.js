import React, { useContext } from 'react';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';

const Contact = () => {
    const { contact, isContactLoading } = useContext(Context);

    if (isContactLoading) {
        return <Loader />
    }
    // console.log('about state', about);

    const { contactTitle, contactEmail, contactSignature, emailTitle, portfolioLink } = contact;

  return (
    <footer className='contact' id='about'>
        <hr className='contact__line' />
        <div className='contact__information'>
            <div className='text-content'>
                <h2 className='text-content__title'>{contactTitle}</h2>
                <a href='mailto:notbadforagirlmcr@gmail.com' className='text-content__email'>{contactEmail}</a>
            </div>
            <div className='contact__details'>
                <h2 className='details__title'>{emailTitle}</h2>
                <p className='details__signature'>{contactSignature} <a className='details__portfolio' href="https://lucid-hopper-63096a.netlify.app/" target="_blank" rel="noreferrer">{portfolioLink}</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Contact;
