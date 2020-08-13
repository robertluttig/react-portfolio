import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MainNavbar from './components/MainNavbar';


function App() {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route path="/portfolio">
         <Portfolio />
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
