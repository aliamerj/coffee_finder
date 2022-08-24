import React from "react";
import { RestaurantData } from "../../types/Types";
import RestaurantCard from "../RestaurantCard/RestaurantCard.component";
import { StoresContainer } from "./stores.style";

const StoresComponent = ({
  restaurants,
}: {
  restaurants: RestaurantData[];
}) => {
  return (
    <StoresContainer>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          name={restaurant.name}
          photo={restaurant.photo.images.original.url}
          id={restaurant.location_id}
        />
      ))}
    </StoresContainer>
  );
};

export default StoresComponent;
