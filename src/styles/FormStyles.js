// src/components/FormStyles.js
import styled from "styled-components";

// Spooky Background
export const PageContainer = styled.div`
  background: linear-gradient(135deg, #2d2a4a, #1f1d36);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-image: url('https://www.transparenttextures.com/patterns/black-linen.png'); /* Dark subtle texture */
`;

// Form Styling with Halloween Theme
export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(40, 40, 50, 0.85); /* Dark translucent background */
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  text-align: center;
  position: relative;

  h1 {
    font-size: 2.5rem;
    color: #ffa31a; /* Pumpkin orange */
    font-family: 'Creepster', cursive; /* Spooky font */
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 6px #000;
  }

  /* Optional: Halloween icon at the top corner */
  &::before {
    content: '🎃';
    position: absolute;
    top: -30px;
    right: -30px;
    font-size: 5rem;
    color: rgba(255, 165, 0, 0.7); /* Transparent pumpkin */
  }
`;

// Input Fields
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #ffa31a; /* Pumpkin orange */
`;

export const Input = styled.input`
  padding: 0.9rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  background: #333;
  color: white;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #ff6600; /* Bright orange focus */
  }
`;

// Button with Glowing Effect
export const Button = styled.button`
  padding: 1rem 1.5rem;
  background: linear-gradient(45deg, #ff4500, #ff6600);
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-shadow: 2px 2px 4px #000;
  box-shadow: 0px 4px 15px rgba(255, 140, 0, 0.8); /* Glowing effect */

  &:hover {
    background: linear-gradient(45deg, #ff6600, #ff4500);
    transform: scale(1.05);
    box-shadow: 0px 4px 20px rgba(255, 165, 0, 1); /* More glow */
  }
`;
