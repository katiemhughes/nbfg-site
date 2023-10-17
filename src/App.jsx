import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './Context/Context';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import GangMember from './components/MeetTheGang/GangMember';
// import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import NotFound from './components/NotFound/NotFound';
import Newspage from './components/News/Newspage';
import NewsList from './components/News/NewsList';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        {/* <UnderConstruction /> */}
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/:gangMember" element={<GangMember />} />
          <Route path="/news/:article" element={<Newspage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
