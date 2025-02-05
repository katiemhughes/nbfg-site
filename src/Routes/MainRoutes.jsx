import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Newspage from '../components/News/Newspage';
import NewsList from '../components/News/NewsList';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import GangMember from '../components/MeetTheGang/GangMember';
import Contact from '../components/Contact/Contact';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../components/TermsAndConditions/TermsAndConditions';

function MainRoutes() {
  const navbarRef = useRef();
  useEffect(() => {
    const root = document.documentElement;

    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        root.style.setProperty('--navbar-height', `${navbarRef.current.offsetHeight}px`);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/:gangMember" element={<GangMember />} />
        <Route path="/news/articles/:newsArticle" element={<Newspage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer">
        <Contact />
      </footer>
    </>
  );
}

export default MainRoutes;
