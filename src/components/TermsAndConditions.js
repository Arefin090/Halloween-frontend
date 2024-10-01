// src/components/TermsAndConditions.js
import React from 'react';
import { TermsContainer, Heading, Subheading, SectionTitle, TermText, List, ListItem } from '../styles/TermsAndConditionsStyles';

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <Heading>🎃 Spooky Fine Print: The Tricks Behind the Treats (AKA Terms & Conditions)</Heading>
      <Subheading>
        Welcome, Ghosts and monsters! As we prepare for a spooktacular night of fun, fright, and unlimited treats, please make sure that you have read these guidelines to ensure a safe and enjoyable Halloween experience for all!
      </Subheading>

      <SectionTitle>👉 For Parents:</SectionTitle>
      <List>
        <ListItem>👻 Supervision Required: Ensure that your little monsters are accompanied by an adult or responsible older sibling or guardian. Safety first!</ListItem>
        <ListItem>👻 Costume Check: Please ensure costumes are safe. Avoid overly long capes or anything that could cause tripping. Masks should not impair vision. Most importantly, costumes should be comfortable.</ListItem>
        <ListItem>👻 Allergy Alerts: If your child has food allergies, please inform us ahead of time or check with each house to avoid any mishaps. Some houses may offer non-food treats! Kindly check if the treats are suitable for your kids.</ListItem>
        <ListItem>👻 Route Planning: Plan your route and set a time limit for trick-or-treating. Stick to well-lit areas and always cross streets at crosswalks.</ListItem>
        <ListItem>👻 Respect the Rules: Follow any specific guidelines provided by the community or individual houses. If a house displays a "No Trick-or-Treating" sign, please respect it.</ListItem>
        <ListItem>👻 Accidents: We are not responsible for any accident or damage that may occur during the event.</ListItem>
        <ListItem>👻 Emergency Contact: Make sure your child has a contact number written down in case they get separated. Also, have a way to reach you or another responsible adult.</ListItem>
      </List>

      <SectionTitle>👉 For Kids:</SectionTitle>
      <List>
        <ListItem>👻 Be Polite: Remember to say "Trick-or-Treat!" when you arrive at each door, and don’t forget to say "Thank you!" when you get your goodies.</ListItem>
        <ListItem>👻 Stay Safe: Stick to sidewalks and avoid running. Watch out for cars and always look both ways before crossing the street.</ListItem>
        <ListItem>👻 Buddy System: Stay in groups with friends or family. It’s more fun and safer!</ListItem>
        <ListItem>👻 Inspect Your Treats: Before munching on any goodies, have your parents check them to make sure they’re safe and sealed.</ListItem>
        <ListItem>👻 Respect Property: Don’t damage decorations or property. Be respectful to homeowners and their Halloween displays.</ListItem>
        <ListItem>👻 Be Thoughtful: Just take a couple of lollies per house so other kids can still have some.</ListItem>
        <ListItem>👻 CLAY-GO: Clean as you go! Take the wrapping of the lollies with you to avoid littering.</ListItem>
        <ListItem>👻 Have Fun: The most important thing is to enjoy the night, the treats, and all the spooky fun!</ListItem>
      </List>

      <SectionTitle>👉 Bonus Tips:</SectionTitle>
      <List>
        <ListItem>👻 Lighting Up: If you’re a house participating in trick-or-treating, make sure your porch light is on and your walkway is clear.</ListItem>
        <ListItem>👻 Treats for All: Consider offering a variety of treats (and maybe a few non-candy options) to cater to different needs.</ListItem>
        <ListItem>👻 Happy Spooktacular Halloween and enjoy Trick-or-Treating, little monsters!</ListItem>
      </List>
    </TermsContainer>
  );
};

export default TermsAndConditions;
