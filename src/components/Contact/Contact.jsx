import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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

  const handleClick = (e, path) => {
    e.preventDefault();
    window.open(path, '_blank');
  };

  return (
    <footer className="contact" id="about" name="contact">
      <hr className="contact__line" />
      <div className="contact__information">
        <div className="text-content">
          <p className="text-content__title">{contactTitle}</p>
          <div className="text-content__container">
            <p className="enquiries__text">General:</p>
            <a href={`mailto:${contactEmail}`} className="enquiries__email">{contactEmail}</a>
          </div>
          <div className="text-content__container">
            <p className="enquiries__text">Finance:</p>
            <a href={`mailto:${financeEmail}`} className="enquiries__email">{financeEmail}</a>
          </div>
        </div>
        {/* <div className="text-content__newsletter">
          <p className="text-content__title">Newsletter</p>
          <p className="enquiries__text">
          Sign up to our newsletter for exclusive content and updates.</p>
          <a className="text-content__link" href="https://mailchi.mp/1b3b4b3b4b3b/your-newsletter" target="_blank" rel="noreferrer">Sign up</a>
        </div> */}
        <div className="text-content">
          <p className="text-content__title">Socials</p>
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
        </div>
      </div>
      <hr className="footer__line" />
      <div className="footer__bottom">
        <div className="footer__bottom--left">
          <p className="details__signature">© 2025 Not Bad for a Girl</p>
          <p className="details__signature">
            {portfolioLinkText}
            {' '}
            <a className="details__portfolio" href={portfolioLink} target="_blank" rel="noreferrer" aria-label="View Katie the developer's portfolio">{portfolioLinkName}</a>
          </p>
        </div>
        <div className="footer__bottom--right">
          <Link
            className="footer__bottom--details"
            to="/privacy-policy"
            onClick={(e) => handleClick(e, '/privacy-policy')}
            onKeyDown={(e) => handleClick(e, '/privacy-policy')}
            target="_blank"
          >
            Privacy Policy
          </Link>
          <Link
            className="footer__bottom--details"
            to="/terms-and-conditions"
            onClick={(e) => handleClick(e, '/terms-and-conditions')}
            onKeyDown={(e) => handleClick(e, '/terms-and-conditions')}
            target="_blank"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
