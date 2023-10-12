import React, { useState, useContext } from 'react';
import '../../styles.scss';
import * as Scroll from 'react-scroll';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';
import MeetTheGangNavbar from '../MeetTheGang/MeetTheGangNavbar';
import TwitterIcon from '../../svgs/TwitterIcon.svg';
import TiktokIcon from '../../svgs/TiktokIcon.svg';
import SoundcloudIconSmall from '../../svgs/SoundcloudIconSmall.svg';

const Navbar = () => {
  const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
  const path = useLocation().pathname;
  // console.log('path', path);
  const navigate = useNavigate();
  const scroll = Scroll.animateScroll;
  const scroller = Scroll.scroller;
  const [click, setClick] = useState(false);
  const [isSubnavOpen, setIsSubnavOpen] = useState(false);

  const { isNavbarLoading, navbar } = useContext(Context);

  if (isNavbarLoading) {
      return <Loader />
  }

  const { icon, iconAlt, homeLink, aboutLink, meetTheGangLink, contactLink, instagramLink, facebookLink, twitterLink, twitterAlt, tiktokLink, tiktokAlt, soundcloudLink, soundcloudAlt } = navbar;

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const toggleSubnav = () => {
      if (!isDesktop) {
        setIsSubnavOpen(!isSubnavOpen);
      } 
    }

    const scrollToHome = () => {
      scroll.scrollToTop({
        duration: 200,
        delay: 0,
        smooth: true,
        offset: 0,
      });
      closeMobileMenu();
    }

    const goToHome = () => {
      navigate('/');
      closeMobileMenu();
    }

    const scrollToAbout = () => {
      scroller.scrollTo('about', {
        duration: 200,
        delay: 0,
        smooth: true,
        offset: 0,
      });

      closeMobileMenu();
    }

    const goToHomeAndScrollToAbout = async () => {
      await closeMobileMenu();
      await navigate('/');
      await scroller.scrollTo('about', {
        duration: 200,
        delay: 0,
        smooth: true,
        offset: 0,
      })
    }

    const scrollToContact = () => {
      scroller.scrollTo('contact', {
        duration: 200,
        delay: 0,
        smooth: true,
        offset: 0,
      });

      closeMobileMenu();
    }

    const goToHomeAndScrollToContact = async () => {
      await closeMobileMenu();
      await navigate('/');
      await scroller.scrollTo('contact', {
        duration: 200,
        delay: 0,
        smooth: true,
        offset: 0,
      })
    }

    // const play = () => {
    //   let audio = document.getElementById("audio");
    //   audio.play();
    // }

    return (
        <>
        <div className="navbar">
          <div className={click ? "navbar__top--active" : "navbar__top"}>
            <div className="navbar__left">
              <img src={icon} alt={iconAlt} className="logo" onClick={goToHome} />
            </div>
            <div className="navbar__right">
              <div className="navbar__button--mobile" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars" } />
              </div>
            </div>
          </div>
          <div className="navbar__bottom">
              <ul className={click ? "links--active" : "links"}>
                <li className="links__link">
                    <NavLink
                      className="links__link--config"
                      to="/"
                      onClick={scrollToHome}>
                        {homeLink}
                    </NavLink>
                  </li>
                  <li className="links__link">
                    {path === '/' ? (
                    <NavLink
                      className="links__link--config"
                      onClick={scrollToAbout}>
                        {aboutLink}
                    </NavLink> ) : (
                    <NavLink
                      className="links__link--config"
                      onClick={goToHomeAndScrollToAbout}>
                        {aboutLink}
                    </NavLink>
                    )}
                  </li>
                  <li className="links__link" onClick={toggleSubnav}>
                    <button id="meet-the-gang" tabIndex="0" className="links__link--config">{meetTheGangLink}</button>
                    <MeetTheGangNavbar handleClick={handleClick} isSubnavOpen={isSubnavOpen} toggleSubnav={toggleSubnav} />
                  </li>
                  <li className="links__link">
                  {path === '/' ? (
                    <NavLink
                      className="links__link--config"
                      onClick={scrollToContact}>
                        {contactLink}
                    </NavLink> ) : (
                    <NavLink
                      className="links__link--config"
                      onClick={goToHomeAndScrollToContact}>
                        {contactLink}
                    </NavLink>
                    )}
                  </li>
                  <div className="logos__mobile">
                    <li className={click ? "logo__mobile--active" : "logo__mobile"}>
                      <a href={instagramLink} target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className={click ? "logo__mobile--active" : "logo__mobile"}>
                      <a href={facebookLink} target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className={click ? "logo__mobile--active" : "logo__mobile"}>
                      <a href={twitterLink} target="_blank" rel="noreferrer" className="logo__icon">
                        <img src={TwitterIcon} alt={twitterAlt} className="logo__icon" />
                      </a>
                    </li>
                    <li className={click ? "logo__mobile--active" : "logo__mobile"}>
                      <a href={tiktokLink} target="_blank" rel="noreferrer" className="logo__icon">
                        <img src={TiktokIcon} alt={tiktokAlt} className="logo__icon" />
                      </a>
                    </li>
                    <li className={click ? "logo__mobile--active" : "logo__mobile"}>
                      <a href={soundcloudLink} target="_blank" rel="noreferrer" className="logo__icon">
                        <img src={SoundcloudIconSmall} alt={soundcloudAlt} className="logo__icon" />
                      </a>
                    </li>
                  </div>
              </ul>
            </div>
          </div>
      </>
    )
}

export default Navbar;
