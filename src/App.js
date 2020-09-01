import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';



export class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Services" component={Services} />
        <Route path="/Contact" component={Contact} />
        <Redirect to='/' />
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App







