import { useContext } from 'react';
import { VehicleContext } from '../context/VehicleContext';
import { VehicleContextType } from '../context/vehicleTypes';

export const useVehicle = (): VehicleContextType => {
  const context = useContext(VehicleContext);
  if (context === undefined) {
    throw new Error('useVehicle must be used within a VehicleProvider');
  }
  return context;
};
