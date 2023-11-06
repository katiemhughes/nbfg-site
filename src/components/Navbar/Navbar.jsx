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
  // console.log('path', path);
  const navigate = useNavigate();
  const scroll = Scroll.animateScroll;
  const { scroller } = Scroll;
  const [click, setClick] = useState(false);
  const [isSubnavOpen, setIsSubnavOpen] = useState(false);

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

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);
  const toggleSubnav = () => {
    if (!isDesktop) {
      setIsSubnavOpen(!isSubnavOpen);
    }
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
    scroller.scrollTo('contact', {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });

    closeMobileMenu();
  };

  const goToHomeAndScrollToContact = async () => {
    await closeMobileMenu();
    await navigate('/');
    await scroller.scrollTo('contact', {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

  // const play = () => {
  //   let audio = document.getElementById("audio");
  //   audio.play();
  // }

  const changeNavBackgroundColorOnScroll = () => {
    const nav = document.querySelector('.navbar');
    console.log('nav', nav);
    const scrollPosition = window.scrollY;
    console.log('scrollPosition', scrollPosition);

    if (!nav) return;

    if (scrollPosition < 40) {
      nav.classList.remove('nav-color');
    } else {
      nav.classList.add('nav-color');
    }
  };

  window.addEventListener('scroll', changeNavBackgroundColorOnScroll);

  return (
    <div className="navbar">
      <div className={click && !isDesktop ? 'navbar__top--active' : 'navbar__top'}>
        <div className="navbar__left" onClick={goToHome} onKeyDown={goToHome} tabIndex="0" role="button">
          <img src={icon} alt={iconAlt} className="logo" />
        </div>
        <div className="navbar__right">
          <div className="navbar__button--mobile" onClick={handleClick} onKeyDown={goToHome} tabIndex="0" role="button">
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </div>
      <div className="navbar__bottom">
        <ul className={click ? 'links--active' : 'links'}>
          <li className="links__link">
            <NavLink
              className="links__link--config"
              to="/"
              onClick={scrollToHome}
            >
              {homeLink}
            </NavLink>
          </li>
          <li className="links__link">
            {path === '/' ? (
              <NavLink
                className="links__link--config"
                onClick={scrollToAbout}
              >
                {aboutLink}
              </NavLink>
            ) : (
              <NavLink
                className="links__link--config"
                onClick={goToHomeAndScrollToAbout}
              >
                {aboutLink}
              </NavLink>
            )}
          </li>
          <li className="links__link">
            <button onClick={toggleSubnav} type="button" id="meet-the-gang" tabIndex="0" className="links__link--config">{meetTheGangLink}</button>
            <MeetTheGangNavbar
              handleClick={handleClick}
              isSubnavOpen={isSubnavOpen}
              toggleSubnav={toggleSubnav}
            />
          </li>
          <li className="links__link">
            <NavLink
              className="links__link--config"
              to="/news"
              onClick={handleClick}
              onKeyDown={handleClick}
            >
              {newsLink}
            </NavLink>
          </li>
          <li className="links__link">
            {path === '/' ? (
              <NavLink
                className="links__link--config"
                onClick={scrollToContact}
              >
                {contactLink}
              </NavLink>
            ) : (
              <NavLink
                className="links__link--config"
                onClick={goToHomeAndScrollToContact}
              >
                {contactLink}
              </NavLink>
            )}
          </li>
          <div className="logos__mobile">
            <li className={click ? 'logo__mobile--active' : 'logo__mobile'}>
              <a href={instagramLink} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className={click ? 'logo__mobile--active' : 'logo__mobile'}>
              <a href={facebookLink} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li className={click ? 'logo__mobile--active' : 'logo__mobile'}>
              <a href={twitterLink} target="_blank" rel="noreferrer" className="logo__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </li>
            <li className={click ? 'logo__mobile--active' : 'logo__mobile'}>
              <a href={tiktokLink} target="_blank" rel="noreferrer" className="logo__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
                </svg>
              </a>
            </li>
            <li className={click ? 'logo__mobile--active' : 'logo__mobile'}>
              <a href={soundcloudLink} target="_blank" rel="noreferrer" className="logo__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 300 300">
                  <path fill="currentColor" d="M14.492 208.896c.619 0 1.143-.509 1.232-1.226l3.365-26.671-3.355-27.278c-.1-.717-.623-1.23-1.242-1.23-.635 0-1.176.524-1.26 1.23l-2.941 27.278 2.941 26.662c.084.716.625 1.235 1.26 1.235zM3.397 198.752c.608 0 1.101-.473 1.19-1.18l2.608-16.574-2.608-16.884c-.09-.685-.582-1.18-1.19-1.18-.635 0-1.127.495-1.217 1.19L0 180.999l2.18 16.569c.09.701.582 1.184 1.217 1.184zM27.762 148.644c-.08-.867-.715-1.5-1.503-1.5-.782 0-1.418.633-1.491 1.5l-2.811 32.355 2.811 31.174c.073.862.709 1.487 1.491 1.487.788 0 1.423-.625 1.503-1.487l3.18-31.174-3.18-32.355zM38.152 214.916c.922 0 1.668-.759 1.758-1.751l3.005-32.156-3.005-33.258c-.09-.999-.836-1.749-1.758-1.749-.935 0-1.692.751-1.756 1.754l-2.656 33.253 2.656 32.156c.064.993.821 1.751 1.756 1.751zM50.127 215.438c1.074 0 1.936-.86 2.025-2.011l-.01.008 2.83-32.426-2.83-30.857c-.08-1.132-.941-2.005-2.016-2.005-1.09 0-1.947.873-2.012 2.014l-2.502 30.849 2.502 32.418c.066 1.15.923 2.01 2.013 2.01zM67.132 181.017l-2.655-50.172c-.074-1.272-1.065-2.286-2.281-2.286-1.207 0-2.195 1.013-2.269 2.286l-2.35 50.172 2.35 32.418c.074 1.278 1.063 2.278 2.269 2.278 1.217 0 2.207-1 2.281-2.278v.009l2.655-32.427zM74.386 215.766c1.339 0 2.45-1.111 2.513-2.529v.021l2.482-32.233-2.482-61.656c-.063-1.418-1.174-2.529-2.513-2.529-1.37 0-2.471 1.111-2.545 2.529l-2.185 61.656 2.195 32.222c.064 1.408 1.165 2.519 2.535 2.519zM86.645 111.435c-1.508 0-2.725 1.238-2.787 2.799l-2.033 66.801 2.033 31.884c.063 1.553 1.279 2.783 2.787 2.783 1.504 0 2.73-1.22 2.783-2.788v.016l2.307-31.895-2.307-66.801c-.053-1.571-1.28-2.799-2.783-2.799zM99.01 215.766c1.656 0 2.975-1.336 3.037-3.056v.019l2.133-31.693-2.133-69.045c-.063-1.714-1.381-3.056-3.037-3.056-1.666 0-3.005 1.342-3.031 3.056l-1.916 69.045 1.916 31.693c.026 1.701 1.365 3.037 3.031 3.037zM111.477 215.734c1.787 0 3.237-1.463 3.291-3.318v.029l1.963-31.404-1.963-67.289c-.054-1.854-1.504-3.311-3.291-3.311-1.8 0-3.25 1.456-3.303 3.311l-1.725 67.289 1.736 31.389c.042 1.841 1.492 3.304 3.292 3.304zM129.359 181.041l-1.777-64.836c-.043-2-1.609-3.571-3.551-3.571-1.947 0-3.514 1.571-3.555 3.584l-1.594 64.823 1.594 31.198c.041 1.984 1.607 3.556 3.555 3.556 1.941 0 3.508-1.572 3.551-3.585v.029l1.777-31.198zM136.682 215.853c2.064 0 3.773-1.717 3.805-3.828v.017l1.613-30.984-1.613-77.153c-.031-2.119-1.74-3.833-3.805-3.833-2.063 0-3.767 1.722-3.809 3.844l-1.434 77.111 1.434 31.016c.042 2.093 1.746 3.81 3.809 3.81zM149.291 92.814c-2.229 0-4.037 1.849-4.074 4.103l-1.667 84.151 1.677 30.526c.027 2.225 1.836 4.068 4.064 4.068 2.195 0 4.037-1.844 4.047-4.105v.037l1.82-30.526-1.82-84.151c-.01-2.262-1.852-4.103-4.047-4.103zM160.82 215.882c.09.008 101.623.056 102.275.056 20.385 0 36.904-16.722 36.904-37.357 0-20.624-16.52-37.349-36.904-37.349a36.315 36.315 0 0 0-14.275 2.907c-2.922-33.671-30.815-60.077-64.842-60.077-8.318 0-16.429 1.662-23.593 4.469-2.788 1.09-3.534 2.214-3.556 4.392v118.539c.032 2.29 1.778 4.193 3.991 4.42z" />
                </svg>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
