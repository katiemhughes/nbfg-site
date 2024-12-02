/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import '../../styles.scss';
// import { Link } from 'react-router-dom';
// import Loader from '../Loader/Loader';
// import { Context } from '../../Context/Context';

function Enter({ hideVideo }) {
  // const { isUnderConstructionLoading, underConstruction } = useContext(Context);

  // if (isUnderConstructionLoading) {
  //   return <Loader />;
  // }

  // const {
  //   underConstructionTitle,
  //   underConstructionDescription,
  //   underConstructionImage,
  // } = underConstruction;

  return (
    <section className="enter" id="enter">
      <div className="enter__elements">
        <h1 className="enter__title">NOT BAD FOR A GIRL</h1>
        <button className="enter__button" type="button" onClick={hideVideo}>Enter</button>
      </div>
      <div className="enter__video">
        <video className="enter__video-element" autoPlay muted>
          <source src="nature.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="enter__text-content" />
    </section>
  );
}

export default Enter;
