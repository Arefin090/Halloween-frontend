// src/components/Form.js
import React, { useState } from "react";
import { Container, FormGroup, Input, Label, Button, FormContainer, PageContainer } from '../styles/FormStyles';
import Map from './Map';

const HalloweenForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submittedAddress, setSubmittedAddress] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send data to backend (Google Sheets)
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Your information has been saved!');
        setSubmittedAddress(formData.address);
        console.log('Submitted Address:', formData.address); // Check this log
      } else {
        alert('Failed to save your information.');
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <h1>Halloween Event Registration</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="address">Address:</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </form>

        {/* Render the map here, passing the submitted address */}
        <Map address={submittedAddress} />
      </FormContainer>
    </PageContainer>
  );
};

export default HalloweenForm;
