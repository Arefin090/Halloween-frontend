import React from 'react';
import { SectionContainer, InfoTitle, InfoText, MapButton } from '../styles/InfoSectionStyles';

const InformationSection = () => {
  // Function to scroll to the form section
  const scrollToForm = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer>
      <InfoTitle>
        🎃 Welcome to Our Spook-tacular <br /> Halloween Headquarters! 👻
      </InfoTitle>
      <InfoText>
        Hear ye, hear ye, welcome, if you dare, to the ultimate Halloween destination! 🧙‍♀️ Here at Tinytix, we're brewing up the perfect potion of thrills and chills for the most exciting Trick-Or-Treat happening in your streets! 🧛‍♂️
      </InfoText>
      <MapButton onClick={scrollToForm}>Add My Address to the Map</MapButton>
    </SectionContainer>
  );
};

export default InformationSection;
