// @flow
import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Skills from './Skills';
import Career from './Career';
import Work from './Work';
import Footer from './Footer';

const TITLE = "Keid's portfolio site";

class App extends Component<any, any> {
  componentDidMount() {
    document.title = TITLE;
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Portfolio />
        <About />
        <Skills />
        <Career />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
