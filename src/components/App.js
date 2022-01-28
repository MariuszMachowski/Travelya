import '../styles/App.css';
import ScrollToTop from './ScrollToTop';
import MainPage from '../pages/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bali from '../pages/Bali';
import Java from '../pages/Java';
import Sulawesi from '../pages/Sulawesi';
import Sumatra from '../pages/Sumatra';
import Maluku from '../pages/Maluku';
import Kalimantan from '../pages/Kalimantan';
function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Route exact path='/' component={MainPage} />
          <Route path='/bali' component={Bali} />
          <Route path='/java' component={Java} />
          <Route path='/sulawesi' component={Sulawesi} />
          <Route path='/sumatra' component={Sumatra} />
          <Route path='/maluku-papua' component={Maluku} />
          <Route path='/kalimantan' component={Kalimantan} />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
