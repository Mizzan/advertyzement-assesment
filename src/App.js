import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
