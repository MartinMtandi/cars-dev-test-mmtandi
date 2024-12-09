import React from 'react';
import styled from 'styled-components';
import { useVehicle } from '../hooks/useVehicle';
import { getVehicleImageUrl } from '../utils/imageUtils';
import { VEHICLE_ID } from '../context/vehicleTypes';
import Typography from './Typography';
import { 
  HeartIcon,
  CalendarIcon,
  ArrowPathIcon,
  BeakerIcon,
  CogIcon,
  TruckIcon,
  SwatchIcon
} from '@heroicons/react/24/outline';

const Vehicle: React.FC = () => {
  const { vehicleDetails, loading, error } = useVehicle();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!vehicleDetails) return <div>No vehicle details available</div>;

  const formattedTitle = vehicleDetails.title.toLowerCase().replace(/\s+/g, '-');
  
  const mainImageUrl = getVehicleImageUrl(
    'stock_large',
    VEHICLE_ID,
    formattedTitle,
    vehicleDetails.image.version
  );

  const thumbnailUrl = getVehicleImageUrl(
    'stock_thumb',
    VEHICLE_ID,
    formattedTitle,
    vehicleDetails.image.version
  );

  const largeImageUrl = getVehicleImageUrl(
    'news_1200x',
    VEHICLE_ID,
    formattedTitle,
    vehicleDetails.image.version
  );

  return (
    <VehicleContainer>
      <Title>{vehicleDetails.title}</Title>
      <Price>R {vehicleDetails.price.toLocaleString()}</Price>
      <VehiclePaymentInfor>
        <MonthlyPayment> Est. monthly payment: <b>R {vehicleDetails.monthly_price.toLocaleString()}</b></MonthlyPayment>
        <WishListLink>
          <Typography color='#CE181E'>Add to Wishlist </Typography>
          <StyledHeartIcon />
        </WishListLink>
      </VehiclePaymentInfor>
      <ImageSection>
        <MainImage src={mainImageUrl} alt={vehicleDetails.title} />
        <ThumbnailContainer>
          <ThumbnailImage 
            src={thumbnailUrl}
            alt={`${vehicleDetails.title} thumbnail`}
            onClick={() => window.open(largeImageUrl, '_blank')}
          />
        </ThumbnailContainer>
      </ImageSection>
      <DetailsSection>
        <Typography fontWeight="bold">Specification Summary</Typography>
        <SpecsGrid>
          <Spec>
            <CalendarIcon className="icon" />
            <Value>{vehicleDetails.year}</Value>
          </Spec>
          <Spec>
            <ArrowPathIcon className="icon" />
            <Value>{vehicleDetails.mileage}</Value>
          </Spec>
          <Spec>
            <BeakerIcon className="icon" />
            <Value>{vehicleDetails.fuel_type}</Value>
          </Spec>
          <Spec>
            <CogIcon className="icon" />
            <Value>{vehicleDetails.transmission}</Value>
          </Spec>
          <Spec>
            <TruckIcon className="icon" />
            <Value>{vehicleDetails.body_type}</Value>
          </Spec>
          <Spec>
            <SwatchIcon className="icon" />
            <Value>{vehicleDetails.colour}</Value>
          </Spec>
        </SpecsGrid>
      </DetailsSection>
    </VehicleContainer>
  );
};

const MonthlyPayment = styled.div``;

const VehicleContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  min-width: 300px;
  margin-bottom: 2rem;
`;

const VehiclePaymentInfor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const WishListLink = styled.div`
  text-decoration: none;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  color: #CE181E;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ThumbnailImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const DetailsSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 400;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #CE181E;
  margin-bottom: 0.2rem;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0 2rem 0;
  width: 100%;
`;

const Spec = styled.div`
  padding: 0.75rem 1rem;
  background-color: #f8f9fa;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  
  .icon {
    width: 20px;
    height: 20px;
    color: #4a5568;
    flex-shrink: 0;
  }

  &:hover {
    background-color: #edf2f7;
    transform: translateY(-2px);
  }
`;

const Value = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

const StyledHeartIcon = styled(HeartIcon)`
  width: 20px;
  height: 20px;
  color: #CE181E;
`;

export default Vehicle;
