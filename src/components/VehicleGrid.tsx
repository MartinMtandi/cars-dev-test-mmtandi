import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import Vehicle from './Vehicle';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VehicleSection = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const VehicleGrid: React.FC = () => {
  return (
    <GridContainer>
      <VehicleSection>
        <Vehicle />
      </VehicleSection>
      <ContactForm />
    </GridContainer>
  );
};

export default VehicleGrid;
