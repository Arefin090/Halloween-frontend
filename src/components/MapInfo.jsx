// src/components/MapInfo.js
import React from "react";
import { MapInfoContainer, MapImage, Heading, SubText, Text, AddButton } from '../styles/MapInfoStyles';

const MapInfo = () => {
  const handleAddAddressClick = () => {
    document.getElementById("formSection").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MapInfoContainer>
      <Heading>🔍 Treat-Or-Trick Near Me</Heading>
      {/* <SubText>
        Get your bags ready to get as many treats as you want 🍬🍭 and unveil your scariest make-up and glittery costumes! 🧛‍♀️
      </SubText> */}
      <Text>
      Get your bags ready to get as many treats as you want🎒🍬🍭 and unveil your scariest make-up and glittery costumes! 🧛🧟‍♀️​ As one of the participants of Tinytix’s Trick-Or-Treat event, you are free to dress-up as you wish whether you’re gonna be Superhero, Monster, Zombie, Disney Princess etc. as long as you got a bag for all the treats! Please click the link to help you navigate your way to all the houses participated on this event. 
      </Text>
      <MapImage src="https://static.wixstatic.com/media/84f0f7_a0ddf51274fe42c2818c3535430ecc88~mv2.jpg/v1/fill/w_900,h_794,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Australia%20Halloween%20Map%20(1).jpg" alt="Halloween Map" />
      <AddButton onClick={handleAddAddressClick}>Add My Address to the Map</AddButton>
    </MapInfoContainer>
  );
};

export default MapInfo;
