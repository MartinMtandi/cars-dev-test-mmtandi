import { VehicleAttributes } from '../services/api';

export interface VehicleContextType {
  vehicleDetails: VehicleAttributes | null;
  loading: boolean;
  error: string | null;
}

export const VEHICLE_ID = '7927016';
