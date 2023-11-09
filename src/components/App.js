// import {useEffect, useState} from 'react';
import smallLogo from '../images/small-logo-white.png';
import bigLogo from '../images/logo.png';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header image={smallLogo} />
      <Main image={bigLogo} />
      <Footer />
    </div>
  );
}

export default App;
