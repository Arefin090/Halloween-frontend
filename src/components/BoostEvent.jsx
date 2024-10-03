// src/components/BoostEvent.js
import React from 'react';
import { BoostEventContainer, BoostHeading, BoostSubheading, BoostEmailButton } from '../styles/BoostEventStyles';

const BoostEvent = () => {
  return (
    <BoostEventContainer>

      <BoostSubheading>Promote your Halloween Event at Tinytix</BoostSubheading>
      <BoostHeading>🎃 Reach families looking for spooky fun.</BoostHeading>
    
      <BoostEmailButton href="mailto:hello@tinytix.com.au?subject=Advertise%20a%20Halloween%20Event">
        👻 Boost Your Event Now!
      </BoostEmailButton>
    </BoostEventContainer>
  );
};

export default BoostEvent;
