import React, { useContext } from 'react';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';

function About() {
  const { about, isAboutLoading } = useContext(Context);

  if (isAboutLoading) {
    return <Loader />;
  }
  // console.log('about state', about);

  const { aboutPageTitle, aboutPageDescription, aboutPageImage } = about;

  return (
    <section className="about" id="about" name="about">
      <div className="about__text-content">
        <h2 className="about__title">{aboutPageTitle}</h2>
        <p className="about__description" dangerouslySetInnerHTML={{ __html: aboutPageDescription }} />
      </div>
      <div className="about__image-content">
        <img className="about__image" src={aboutPageImage} alt={aboutPageTitle} />
      </div>
    </section>
  );
}

export default About;
