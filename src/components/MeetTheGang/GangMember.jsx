/* eslint-disable react/no-danger */
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';
import EmailIcon from '../../svgs/EmailIcon.svg';
import InstagramIcon from '../../svgs/InstagramIcon.svg';
import FacebookIcon from '../../svgs/FacebookIcon.svg';
import SoundcloudIcon from '../../svgs/SoundcloudIcon.svg';
import MixcloudIcon from '../../svgs/MixcloudIcon.svg';
import NotFound from '../NotFound/NotFound';

function GangMember() {
  const { gangMember: gangMemberUrlParam } = useParams();
  const { theGang, isTheGangLoading } = useContext(Context);
  const [gangMember, setGangMember] = useState({});

  useEffect(() => {
    const matchedGangMember = theGang.find((item) => item.slug === gangMemberUrlParam);
    setGangMember(matchedGangMember);
  }, [theGang, gangMemberUrlParam]);

  if (isTheGangLoading) {
    return <Loader />;
  }

  if (!gangMember) {
    return <NotFound />;
  }

  const {
    title,
    description,
    image,
    slug,
    email,
    instagram,
    facebook,
    soundcloud,
    mixcloud,
    secondaryPronoun,
    soundcloudEmbed,
  } = gangMember;

  const soundcloudEmbedString = soundcloudEmbed ? soundcloudEmbed.content[0]?.content[0]?.value : '';

  return (
    <section className="meet" id={slug}>
      <h2 className="meet__title">{title}</h2>
      <div className="meet__image-container">
        <img className="meet__image" src={image} alt={title} />
      </div>
      <p className="meet__description" dangerouslySetInnerHTML={{ __html: description }} />
      {soundcloudEmbed ? (
        <div className="meet__embed" dangerouslySetInnerHTML={{ __html: soundcloudEmbedString }} />
      ) : null}
      <p className="meet__info">
        Hit up
        {' '}
        {title}
        {' '}
        via email or follow
        {' '}
        {secondaryPronoun}
        {' '}
        on socials below...
      </p>
      <div className="meet__contact">
        {email ? (
          <a href={`mailto:${email}`} className="meet__contact--link">
            <img src={EmailIcon} alt="Email Icon" className="contact__svg" />
          </a>
        ) : null}
        {instagram ? (
          <a href={instagram} className="meet__contact--link">
            <img src={InstagramIcon} alt="Instagram Icon" className="contact__svg" />
          </a>
        ) : null}
        {facebook ? (
          <a href={facebook} className="meet__contact--link">
            <img src={FacebookIcon} alt="Facebook Icon" className="contact__svg" />
          </a>
        ) : null}
        {soundcloud ? (
          <a href={soundcloud} className="meet__contact--link">
            <img src={SoundcloudIcon} alt="Soundcloud Icon" className="contact__svg" />
          </a>
        ) : null}
        {mixcloud ? (
          <a href={mixcloud} className="meet__contact--link">
            <img src={MixcloudIcon} alt="Mixcloud Icon" className="contact__svg" />
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default GangMember;
