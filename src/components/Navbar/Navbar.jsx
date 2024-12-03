import React, { useState, useContext } from 'react';
import '../../styles.scss';
import * as Scroll from 'react-scroll';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';
import MeetTheGangNavbar from '../MeetTheGang/MeetTheGangNavbar';
// import TwitterIcon from '../../svgs/TwitterIcon.svg';
// import TiktokIcon from '../../svgs/TiktokIcon.svg';
// import SoundcloudIconSmall from '../../svgs/SoundcloudIconSmall.svg';

function Navbar() {
  const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const scroll = Scroll.animateScroll;
  const { scroller } = Scroll;
  const [click, setClick] = useState(false);
  const [isSubnavOpen, setIsSubnavOpen] = useState(false);
  const [isLinksHidden, setIsLinksHidden] = useState(false);

  const { isNavbarLoading, navbar } = useContext(Context);

  if (isNavbarLoading) {
    return <Loader />;
  }

  const {
    icon,
    iconAlt,
    homeLink,
    aboutLink,
    meetTheGangLink,
    newsLink,
    contactLink,
    instagramLink,
    facebookLink,
    twitterLink,
    // twitterAlt,
    tiktokLink,
    // tiktokAlt,
    soundcloudLink,
    // soundcloudAlt,
  } = navbar;

  const closeMobileMenu = () => setClick(false);

  const toggleSubnav = () => {
    if (!isDesktop) {
      setIsSubnavOpen(!isSubnavOpen);
      setIsLinksHidden(!isLinksHidden);
    }
  };

  const handleClick = () => {
    setClick(!click);
    scroll.scrollToTop({
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

  const scrollToHome = () => {
    scroll.scrollToTop({
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
    closeMobileMenu();
  };

  const goToHome = () => {
    navigate('/');
    scrollToHome();
  };

  const scrollToAbout = () => {
    scroller.scrollTo('about', {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });

    closeMobileMenu();
  };

  const goToHomeAndScrollToAbout = async () => {
    await closeMobileMenu();
    await navigate('/');
    await scroller.scrollTo('about', {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });

    closeMobileMenu();
  };

  const goToHomeAndScrollToContact = async () => {
    await closeMobileMenu();
    await navigate('/');
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  // const play = () => {
  //   let audio = document.getElementById("audio");
  //   audio.play();
  // }

  return (
    <>
      <div className={`navbar__top ${(click && !isDesktop) ? 'open' : 'closed'}`}>
        <div className="navbar__left">
          <div className="logo__container" onClick={goToHome} onKeyDown={goToHome} tabIndex="0" role="button">
            <img src={icon} alt={iconAlt} className="logo" loading="lazy" />
          </div>
        </div>
        <div className="navbar__right">
          <button className="navbar__button--mobile" onClick={handleClick} onKeyDown={goToHome} tabIndex="0" type="button" aria-label={click ? 'Close mobile menu' : 'View mobile menu'}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className={`navbar__bottom ${click ? 'open' : 'closed'}`}>
        <ul className={`links ${click ? 'open' : 'closed'} ${isLinksHidden ? 'links-hidden' : ''}`}>
          <li
            className={`links__link ${
              click && !isLinksHidden ? 'open' : 'closed'
            } ${isLinksHidden ? 'links-hidden' : ''}`}
          >
            <NavLink
              className={`links__link--config ${click && !isLinksHidden ? 'open' : 'closed'}`}
              to="/"
              onClick={scrollToHome}
            >
              {homeLink}
            </NavLink>
          </li>
          <li
            className={`links__link ${
              click && !isLinksHidden ? 'open' : 'closed'
            } ${isLinksHidden ? 'links-hidden' : ''}`}
          >
            {path === '/' ? (
              <NavLink
                className={`links__link--config ${click && !isLinksHidden ? 'open' : 'closed'}`}
                onClick={scrollToAbout}
              >
                {aboutLink}
              </NavLink>
            ) : (
              <NavLink
                className={`links__link--config ${click && !isLinksHidden ? 'open' : 'closed'}`}
                onClick={goToHomeAndScrollToAbout}
              >
                {aboutLink}
              </NavLink>
            )}
          </li>
          <li
            className="links__link--gang"
          >
            <MeetTheGangNavbar
              handleClick={handleClick}
              isSubnavOpen={isSubnavOpen}
              isLinksHidden={isLinksHidden}
              click={click}
            />
            <button
              onClick={toggleSubnav}
              type="button"
              id="meet-the-gang"
              tabIndex="0"
              className={`links__link--config--gang ${isSubnavOpen ? 'open' : 'closed'}`}
              aria-label={!isLinksHidden ? meetTheGangLink : 'Go back to main menu'}
            >
              {!isLinksHidden ? meetTheGangLink : <i className="fas fa-arrow-left" aria-hidden="true" />}
            </button>
          </li>
          <li
            className={`links__link ${
              click && !isLinksHidden ? 'open' : 'closed'
            } ${isLinksHidden ? 'links-hidden' : ''}`}
          >
            <NavLink
              className={`links__link--config ${click && !isLinksHidden ? 'open' : 'closed'}`}
              to="/news"
              onClick={handleClick}
              onKeyDown={handleClick}
            >
              {newsLink}
            </NavLink>
          </li>
          <li
            className={`links__link ${
              click && !isLinksHidden ? 'open' : 'closed'
            } ${isLinksHidden ? 'links-hidden' : ''}`}
          >
            {path === '/' ? (
              <NavLink
                className={`links__link--config ${click && !isLinksHidden ? 'open' : 'closed'}`}
                onClick={scrollToContact}
              >
                {contactLink}
              </NavLink>
            ) : (
              <NavLink
                className={`links__link--config ${click && !isLinksHidden ? 'open' : 'closed'}`}
                onClick={goToHomeAndScrollToContact}
              >
                {contactLink}
              </NavLink>
            )}
          </li>
          <div className={`logos__mobile ${click && !isLinksHidden ? 'show' : 'hide'}`}>
            <li className="logo__mobile">
              <a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Visit our Instagram">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li className="logo__mobile">
              <a href={facebookLink} target="_blank" rel="noreferrer" aria-label="Visit our Facebook">
                <i className="fab fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li className="logo__mobile">
              <a href={twitterLink} target="_blank" rel="noreferrer" className="logo__icon" aria-label="Visit our Twitter">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li className="logo__mobile">
              <a href={tiktokLink} target="_blank" rel="noreferrer" className="logo__icon" aria-label="Visit our Tiktok">
                <i className="fab fa-tiktok" aria-hidden="true" />
              </a>
            </li>
            <li className="logo__mobile">
              <a href={soundcloudLink} target="_blank" rel="noreferrer" className="logo__icon" aria-label="Visit our Soundcloud">
                <i className="fab fa-soundcloud" aria-hidden="true" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
