// import {useEffect, useState} from 'react';
import image from '../images/small-logo-white.png';
import Header from './Header.js';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header image={image} />
    </div>
  );
}

export default App;
