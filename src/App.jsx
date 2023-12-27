import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './Context/Context';
import Enter from './components/Enter/Enter';
import MainRoutes from './Routes/MainRoutes';
import './styles/enter.scss';

function App() {
  const storedHiddenValue = JSON.parse(window.localStorage.getItem('ENTER_PAGE_HIDDEN'));
  const storedStyleValue = JSON.parse(window.localStorage.getItem('CUSTOM_NAV_STYLE'));
  const [showEnterScreen, setShowEnterScreen] = useState(
    storedHiddenValue !== null ? storedHiddenValue : true,
  );

  useEffect(() => {
    if (storedStyleValue !== null && storedStyleValue === 'block') {
      document.styleSheets[2].cssRules[3].style.display = 'block';
    }
  }, []);

  const hideEnterVideo = () => {
    setShowEnterScreen(false);
    try {
      document.styleSheets[2].cssRules[3].style.display = 'block';
    } catch (error) {
      console.log(error);
    }
    window.localStorage.setItem('ENTER_PAGE_HIDDEN', JSON.stringify(false));
    window.localStorage.setItem('CUSTOM_NAV_STYLE', JSON.stringify('block'));
  };

  useEffect(() => {
    window.localStorage.setItem('ENTER_PAGE_HIDDEN', JSON.stringify(showEnterScreen));
  }, [showEnterScreen]);

  return (
    <Provider>
      <BrowserRouter>
        {showEnterScreen ? <Enter hideVideo={hideEnterVideo} /> : <MainRoutes />}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
