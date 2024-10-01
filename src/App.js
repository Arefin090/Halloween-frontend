// src/App.js
import React from 'react';
import HalloweenForm from './components/Form';
import Header from './components/Header';
import IntroEventSection from './components/IntroEventSection';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import EventSection from './components/EventSection';
import MapInfo from './components/MapInfo';
import BoostEvent from './components/BoostEvent';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <div className="App">
       <Header/>
      <IntroEventSection/>
      <InfoSection/>
      <MapInfo/>
      <HalloweenForm />
      <EventSection/>
      <BoostEvent/>
      <TermsAndConditions/>
      <Footer/>
    
    </div>
  );
}

export default App;
