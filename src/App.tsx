import React from 'react';
import './App.css';
import Featured from './components/Featured';
import Header from './components/Header';
import Home from './components/Home';
import Cta from './components/Cta';
import New from './components/New';
import Brand from './components/Brand';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Featured/>
      <Cta/>
      <New/>
      <Brand/>
      <Contact/>
      <ScrollTop/>
    </div>
  );
}

export default App;
