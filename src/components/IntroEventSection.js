import React from 'react';
import { SectionContainer, EventButton } from '../styles/IntroEventSectionStyles';

const IntroEventSection = () => {
  return (
    <SectionContainer>
      <EventButton onClick={() => window.open('https://www.tinytix.com.au/', '_blank')}>
        🎃 Halloween Events
      </EventButton>
    </SectionContainer>
  );
};

export default IntroEventSection;
