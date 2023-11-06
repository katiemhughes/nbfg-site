import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <div className="not-found__image-content">
        <img className="not-found__image" src="nbfg-logo.png" alt="NBFG logo" />
      </div>
      <p data-testid="description" className="not-found__description">Oops! We couldn&apos;t find what you&apos;re looking for.</p>
      <button className="not-found__button" type="button" onClick={goToHome}>Go back to homepage</button>
    </div>
  );
}

export default NotFound;
