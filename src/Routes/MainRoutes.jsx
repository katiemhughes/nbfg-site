import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Newspage from '../components/News/Newspage';
import NewsList from '../components/News/NewsList';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import GangMember from '../components/MeetTheGang/GangMember';
import Contact from '../components/Contact/Contact';

function MainRoutes() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const root = document.documentElement;

    if (navbar) {
      root.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
    }

    const handleResize = () => {
      if (navbar) {
        root.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <nav className="navbar">
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/news" element={<NewsList />} />
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
