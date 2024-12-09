
export type ImageSize = 'stock_large' | 'stock_thumb' | 'news_1200x';

const IMAGE_BASE_URL = 'https://img-ik.cars.co.za/ik-seo/carsimages';

export const getVehicleImageUrl = (
  size: ImageSize,
  vehicleId: string,
  title: string,
  version: number
): string => {
  return `${IMAGE_BASE_URL}/tr:n-${size}/${vehicleId}/${title}.jpg?v=${version}`;
};
