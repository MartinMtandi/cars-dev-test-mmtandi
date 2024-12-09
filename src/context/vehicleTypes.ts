import { VehicleAttributes } from '../services/api';

export interface VehicleContextType {
  vehicleDetails: VehicleAttributes | null;
  dealerDetails: DealerDetails | null;
  loading: boolean;
  error: string | null;
}

export interface DealerDetails {
  agent_address_1: string;
  agent_address_2: string;
  agent_address_3: string;
  agent_area: string;
  agent_banner_image: string;
  agent_banner_image_small: string;
  agent_coords_0_coord: number;
  agent_coords_1_coord: number;
  agent_dealer_offer: string;
  agent_dealership_number: string;
  agent_featured: string;
  agent_group: string;
  agent_group_banner: string;
  agent_group_header: string;
  agent_id: string;
  agent_locality: string;
  agent_name: string;
  agent_name_sort: string;
  agent_offering: string;
  agent_settings: string;
  agent_showcase_image: string;
  agent_showcase_image_url: string;
  agent_status: string;
  agent_tracking_enabled: string;
  agent_tracking_number: string;
  agent_unlisted: string;
  agent_vehicles: string;
  agent_vin_required: string;
  agent_whatsapp_enabled: string;
  group_frontpage: string;
  group_name: string;
  group_tracking_enabled: string;
}

export const VEHICLE_ID = '7927016';
