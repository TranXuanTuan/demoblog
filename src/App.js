import React from 'react';
import './App.css';
import Slider from './components/slider';
import Footer from './components/footer';
import Header from './components/header'
import Content from './components/content'

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
