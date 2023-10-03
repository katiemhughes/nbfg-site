import { Provider } from './Context/Context';
import About from './components/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Moll from './components/MeetTheGang/Moll/Moll';
import Maracuya from './components/MeetTheGang/Maracuya/Maracuya';
import DaiSu from './components/MeetTheGang/DaiSu/DaiSu';
import ThtGrl from './components/MeetTheGang/ThtGrl/ThtGrl';
import EggOnToast from './components/MeetTheGang/EggOnToast/EggOnToast';
import Martha from './components/MeetTheGang/Martha/Martha';
import Sophie from './components/MeetTheGang/Sophie/Sophie';
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
          <Route path="/moll" element={<Moll />} />
          <Route path="/maracuya" element={<Maracuya />} />
          <Route path="/daisu" element={<DaiSu />} />
          <Route path="/thtgrl" element={<ThtGrl />} />
          <Route path="/eggontoast" element={<EggOnToast />} />
          <Route path="/martha" element={<Martha />} />
          <Route path="/sophie" element={<Sophie />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
