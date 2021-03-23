import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
      <Router basename={'/new-s-presso/'}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
  )
}

export default App;
