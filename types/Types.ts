export interface RestaurantRequest {
  results: {
    data: RestaurantData[];
  };
}
export interface RestaurantData {
  location_id: string;
  name: string;
  photo: {
    images: {
      large: {
        width: number;
        url: string;
      };
      original: {
        width: number;
        url: string;
      };
    };
  };
  location_string: string;
  open_now_tex: string;
  address: string;
  phone: string;
}
