// src/styles/TermsAndConditionsStyles.js
import styled from 'styled-components';

export const TermsContainer = styled.div`
  padding: 60px;
  background-color: #f8f8f8;
  color: #333;
  text-align: left;

  @media (max-width: 768px) {
    padding: 40px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #000;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Subheading = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #000;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  &::before {
    content: "👉";
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;
