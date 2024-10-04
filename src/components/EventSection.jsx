// src/components/EventSection.js
import React from 'react';
import { EventContainer, EventHeading, EventDescription, ExploreButton } from '../styles/EventSectionStyles';

const EventSection = () => {
  return (
    <EventContainer>
      <EventHeading>🎃 Halloween Events</EventHeading>
      <EventDescription>
        Get ready for a spooktacular Halloween with our handpicked list of family-friendly events! From costume parades to haunted houses and trick-or-treating, there's something for everyone to enjoy. Whether you're looking for thrills or just some festive fun, these events are perfect for parents and kids alike.
      </EventDescription>
      <ExploreButton href="https://www.tinytix.com.au/" target="_blank">
      🎃 Halloween Events
      </ExploreButton>
    </EventContainer>
  );
};

export default EventSection;
