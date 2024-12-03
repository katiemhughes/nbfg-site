import React, { useContext } from 'react';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';

function Contact() {
  const { contact, isContactLoading } = useContext(Context);

  if (isContactLoading) {
    return <Loader />;
  }

  const {
    contactTitle,
    contactEmail,
    financeEmail,
    instagramLink,
    facebookLink,
    twitterLink,
    tiktokLink,
    soundcloudLink,
    portfolioLinkText,
    portfolioLinkName,
    portfolioLink,
  } = contact;

  return (
    <footer className="contact" id="about" name="contact">
      <hr className="contact__line" />
      <div className="contact__information">
        <div className="text-content">
          <h2 className="text-content__title">{contactTitle}</h2>
          <div className="text-content__container">
            <p className="enquiries__text">General enquiries:</p>
            <a href={`mailto:${contactEmail}`} className="enquiries__email">{contactEmail}</a>
          </div>
          <div className="text-content__container">
            <p className="enquiries__text">Finance enquiries:</p>
            <a href={`mailto:${financeEmail}`} className="enquiries__email">{financeEmail}</a>
          </div>
        </div>
        <ul className="logos">
          <li className="logos__logo">
            <a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Visit our Instagram">
              <i className="fab fa-instagram logo__icon" aria-hidden="true" />
            </a>
          </li>
          <li className="logos__logo">
            <a href={facebookLink} target="_blank" rel="noreferrer" aria-label="Visit our Facebook">
              <i className="fab fa-facebook logo__icon" aria-hidden="true" />
            </a>
          </li>
          <li className="logos__logo">
            <a href={twitterLink} target="_blank" rel="noreferrer" aria-label="Visit our Twitter">
              <i className="fab fa-twitter logo__icon" aria-hidden="true" />
            </a>
          </li>
          <li className="logos__logo">
            <a href={tiktokLink} target="_blank" rel="noreferrer" className="logo__icon" aria-label="Visit our Tiktok">
              <i className="fab fa-tiktok logo__icon" aria-hidden="true" />
            </a>
          </li>
          <li className="logos__logo">
            <a href={soundcloudLink} target="_blank" rel="noreferrer" className="logo__icon" aria-label="Visit our Soundcloud">
              <i className="fab fa-soundcloud logo__icon" aria-hidden="true" />
            </a>
          </li>
        </ul>
        <p className="details__signature">
          {portfolioLinkText}
          {' '}
          <a className="details__portfolio" href={portfolioLink} target="_blank" rel="noreferrer" aria-label="View Katie the developer's portfolio">{portfolioLinkName}</a>
        </p>
      </div>
    </footer>
  );
}

export default Contact;
