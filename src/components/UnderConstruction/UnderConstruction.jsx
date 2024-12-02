/* eslint-disable react/no-danger */
import React, { useContext } from 'react';
import '../../styles.scss';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';

function UnderConstruction() {
  const { isUnderConstructionLoading, underConstruction } = useContext(Context);

  if (isUnderConstructionLoading) {
    return <Loader />;
  }

  const {
    underConstructionTitle,
    underConstructionDescription,
    underConstructionImage,
  } = underConstruction;

  return (
    <section className="under-construction" id="underConstruction">
      <div className="under-construction__text-content">
        <h2 className="under-construction__title">{underConstructionTitle}</h2>
        <p className="under-construction__description" dangerouslySetInnerHTML={{ __html: underConstructionDescription }} />
      </div>
      <div className="under-construction__image-content">
        <img className="under-construction__image" src={underConstructionImage} alt={underConstructionTitle} loading="lazy" />
      </div>
    </section>
  );
}

export default UnderConstruction;
