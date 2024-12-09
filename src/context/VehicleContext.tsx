import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getVehicleDetails } from '../services/api';
import { VehicleContextType, VEHICLE_ID } from './vehicleTypes';

const VehicleContextInternal = createContext<VehicleContextType | undefined>(undefined);

export const VehicleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [vehicleDetails, setVehicleDetails] = useState<VehicleContextType['vehicleDetails']>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      setLoading(true);
      
      // Check session storage first
      const cachedData = sessionStorage.getItem(`vehicle_${VEHICLE_ID}`);
      if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData);
          setVehicleDetails(parsedData);
          setLoading(false);
          return;
        } catch (error) {
          console.error('Error parsing cached data:', error);
        }
      }

      try {
        const response = await getVehicleDetails(VEHICLE_ID);
        console.log('API Response:', response); // Debug log
        
        // Check if response has the data directly
        const vehicleData = response.data?.[0]?.attributes || response;
        
        if (vehicleData) {
          setVehicleDetails(vehicleData);
          // Store in session storage
          sessionStorage.setItem(`vehicle_${VEHICLE_ID}`, JSON.stringify(vehicleData));
        } else {
          setError('No vehicle data found');
        }
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch vehicle details');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, []);

  return (
    <VehicleContextInternal.Provider value={{ vehicleDetails, loading, error }}>
      {children}
    </VehicleContextInternal.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useVehicleContext = () => {
  const context = useContext(VehicleContextInternal);
  if (context === undefined) {
    throw new Error('useVehicleContext must be used within a VehicleProvider');
  }
  return context;
};

export { VehicleContextInternal as VehicleContext };
