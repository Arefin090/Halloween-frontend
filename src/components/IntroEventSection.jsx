import React from 'react';
import { SectionContainer, EventImage, EventButton } from '../styles/IntroEventSectionStyles';

const IntroEventSection = () => {
  return (
    <SectionContainer>
      <EventImage 
        src='https://static.wixstatic.com/media/84f0f7_567bd2a54fa24ee0b7981ae43de40aea~mv2.jpg/v1/fill/w_1755,h_804,al_c,q_85,enc_auto/84f0f7_567bd2a54fa24ee0b7981ae43de40aea~mv2.jpg' 
        alt='Halloween Event Image'
      />
      <EventButton onClick={() => window.open('https://www.tinytix.com.au/', '_blank')}>
        🎃 Halloween Events
      </EventButton>
    </SectionContainer>
  );
};

export default IntroEventSection;
