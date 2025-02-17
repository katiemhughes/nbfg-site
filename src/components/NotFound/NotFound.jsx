import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import Loader from '../Loader/Loader';

function NotFound() {
  const { isNotFoundLoading, notFound } = useContext(Context);

  if (isNotFoundLoading) {
    return <Loader />;
  }

  const {
    notFoundDescription,
    notFoundImage,
    notFoundImageAlt,
    notFoundButtonText,
  } = notFound;

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
      <Link className="not-found__button" type="button" reloadDocument to="/">
        {notFoundButtonText}
      </Link>
    </div>
  );
}

export default NotFound;
