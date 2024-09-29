// src/App.js
import React from 'react';
import HalloweenForm from './components/Form';
import Header from './components/Header';
import IntroEventSection from './components/IntroEventSection';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import EventSection from './components/EventSection';
import MapInfo from './components/MapInfo';

function App() {
  return (
    <div className="App">
       <Header/>
      <IntroEventSection/>
      <InfoSection/>
      <MapInfo/>
      <HalloweenForm />
      <EventSection/>
      <Footer/>
    
    </div>
  );
}

export default App;
