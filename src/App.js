import logo from './logo.svg';
import React from 'react';
import ReactDOM  from 'react';
import Slider from "react-slick";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faLink, faRoute } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './about/About';
import Offers from './components/Offers';

library.add(fab, faCheckSquare, faCoffee)
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="https://tranhtam.github.io/dulichviet/" component={Banner} />
          <Route path="https://tranhtam.github.io/dulichviet/blog" component={Blog} />
          <Route path="https://tranhtam.github.io/dulichviet/contact" component={Contact} />
          <Route path="https://tranhtam.github.io/dulichviet/offers" component={Offers} />
          <Route path="https://tranhtam.github.io/dulichviet/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
