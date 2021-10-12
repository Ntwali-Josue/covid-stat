import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Continent from './components/Continent';
import './styles/App.css';

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <Home />
      <Switch>
        <Route path="/continent-1">
          <Continent />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
