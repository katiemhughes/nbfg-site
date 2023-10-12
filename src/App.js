import { Provider } from './Context/Context';
import About from './components/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import GangMember from './components/MeetTheGang/GangMember';
// import UnderConstruction from './components/UnderConstruction/UnderConstruction';

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
      {/* <UnderConstruction /> */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:gangMember" element={<GangMember />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
