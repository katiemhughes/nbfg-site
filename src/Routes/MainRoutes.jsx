import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Newspage from '../components/News/Newspage';
import NewsList from '../components/News/NewsList';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import GangMember from '../components/MeetTheGang/GangMember';

function MainRoutes() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/:gangMember" element={<GangMember />} />
        <Route path="/news/articles/:newsArticle" element={<Newspage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
