import React from 'react';

import {
  Blog, 
  Features, 
  Footer, 
  Header, 
  Possibility, 
  WhatGPT3
} from './containers'
import { CTA, Brand, Navbar } from './components'

// For mark CSS classes I'm using the BEM (Block Element Modifier) notation 
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />  
      </div>

      <Brand /> 
      <WhatGPT3 /> 
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
