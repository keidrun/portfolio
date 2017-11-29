// @flow
import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import News from './News';
import About from './About';
import Work from './Work';
import Career from './Career';
import Footer from './Footer';

const TITLE = "Keid's portfolio site";

class App extends Component<any, any> {
  componentDidMount() {
    document.title = TITLE;
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Header />
        <News />
        <About />
        <Work />
        <Career />
        <Footer />
      </div>
    );
  }
}

export default App;
