import { DealerDetails } from '../context/vehicleTypes';

const API_URL = import.meta.env.VITE_API_URL;

export interface VehicleImage {
  version: number;
  count: number;
  path: string;
  name: string;
  extension: string;
}

export interface VehicleAttributes {
  agent_coords_0_coord: number;
  agent_coords_1_coord: number;
  agent_featured: string;
  agent_locality: string;
  agent_name: string;
  agent_vin_required: string;
  body_type: string;
  body_type_code: string;
  code: string;
  colour: string;
  commercial_type: string;
  condition: string;
  description: string;
  fuel_type: string;
  image: VehicleImage;
  make: string;
  mileage: string;
  model: string;
  monthly_price: number;
  new_or_used: string;
  options: string;
  price: number;
  province: string;
  reference: string;
  search_type: string;
  seats: string;
  seller_type: string;
  seller_types: string[];
  title: string;
  transmission: string;
  variant: string;
  variant_short: string;
  vehicle_axle_config: string;
  website_url: string;
  year: number;
}

export interface VehicleResponse {
  data: Array<{
    attributes: VehicleAttributes;
    relationships: {
      seller: {
        data: {
          id: string;
          type: string;
        };
      };
    };
  }>;
}

export const getVehicleDetails = async (vehicleId: string): Promise<VehicleResponse> => {
  try {
    const response = await fetch(`${API_URL}/vehicle/${vehicleId}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`Failed to fetch vehicle details: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vehicle details:', error);
    throw error;
  }
};

export const fetchDealer = async (id: string): Promise<DealerDetails> => {
  try {
    const response = await fetch(`${API_URL}/dealer/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch dealer: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dealer:', error);
    throw error;
  }
};
