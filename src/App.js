import { Provider } from './Context/Context';
import { BrowserRouter } from 'react-router-dom';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <UnderConstruction />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
