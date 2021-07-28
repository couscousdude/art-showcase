import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path='/home'
          render={() => (
            <Home />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
