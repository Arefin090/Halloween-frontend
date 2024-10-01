// src/components/BoostEvent.js
import React from 'react';
import { BoostEventContainer, BoostHeading, BoostSubheading, BoostEmailButton } from '../styles/BoostEventStyles';

const BoostEvent = () => {
  return (
    <BoostEventContainer>
      <BoostHeading>🎃 Reach families looking for spooky fun.<br />Promote with Tinytix today!</BoostHeading>
      <BoostSubheading>Add your Halloween Event</BoostSubheading>

      <BoostEmailButton href="mailto:hello@tinytix.com.au?subject=Advertise%20a%20Halloween%20Event">
        👻 Boost Your Event Now!
      </BoostEmailButton>
    </BoostEventContainer>
  );
};

export default BoostEvent;
