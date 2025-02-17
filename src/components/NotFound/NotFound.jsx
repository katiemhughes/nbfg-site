import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import Loader from '../Loader/Loader';

function NotFound() {
  const { isNotFoundLoading, notFound } = useContext(Context);
  const navigate = useNavigate();

  if (isNotFoundLoading) {
    return <Loader />;
  }

  const {
    notFoundDescription,
    notFoundImage,
    notFoundImageAlt,
    notFoundButtonText,
  } = notFound;

  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.display = 'none';
  }, []);

  return (
    <div className="not-found">
      <div className="not-found__image-content">
        <img
          className="not-found__image"
          src={notFoundImage}
          alt={notFoundImageAlt}
          loading="lazy"
        />
      </div>
      <p
        data-testid="description"
        className="not-found__description"
        dangerouslySetInnerHTML={{ __html: notFoundDescription }}
      />
      <button className="not-found__button" type="button" onClick={goToHome}>
        {notFoundButtonText}
      </button>
    </div>
  );
}

export default NotFound;
