import { Provider } from './Context/Context';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  return (
    <Provider>
      <Carousel />
      <About />
    </Provider>
  );
}

export default App;
