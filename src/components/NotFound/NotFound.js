import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <>
            <div className='not-found'>
                <div className='not-found__image-content'>
                    <img className='not-found__image' src='nbfg-logo.png' alt='NBFG logo' />
                </div>
                <p className='not-found__description'>Oops! We couldn't find what you're looking for.</p>
                <button className='not-found__button' onClick={goToHome}>Go back to homepage</button>
            </div>
        </>

    )
}

export default NotFound;