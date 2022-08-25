import axios from "axios";
import { RestaurantData, RestaurantRequest } from "../types/Types";
const defaultPosition = "57.6282658964594,39.8911484975912";

export const fetchingResturnt = async (
  position: string = defaultPosition
): Promise<RestaurantData[]> => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("language", "en_US");
  encodedParams.append("limit", "6");
  encodedParams.append("location_id", position);
  encodedParams.append("currency", "USD");

  const options = {
    method: "POST",
    url: "https://worldwide-restaurants.p.rapidapi.com/search",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": process.env.MYAPI as string,
      "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
    },
    data: encodedParams,
  };
  try {
    const res = await axios.request<RestaurantRequest>(options);
    return res.data.results.data;
  } catch (error: any) {
    return error.message;
  }
};
