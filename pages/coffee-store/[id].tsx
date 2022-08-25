import { GetServerSidePropsContext, NextPage } from "next";
import SingleRestaurant from "../../components/singleRestaurant/SingleRestaurant.component";
import { restaurantsFake } from "../../Data/restaurant";
import { RestaurantData } from "../../types/Types";
import { fetchingResturnt } from "../../utils/fetchingResturnt";
let restaurants: RestaurantData[];
const switchingData = (
  restaurantsD: RestaurantData[] | string
): RestaurantData[] => {
  if (typeof restaurantsD === "string") {
    return restaurantsFake;
  } else {
    return restaurantsD;
  }
};

export async function getStaticProps(context: GetServerSidePropsContext) {
  const params = context.params;
  const restaurantsReal = await fetchingResturnt();
  restaurants = switchingData(restaurantsReal);

  const findRestaurntById = restaurants.find((restaurant) => {
    return restaurant.location_id.toString() === params?.id; //dynamic id
  });
  return {
    props: {
      restaurant: findRestaurntById ? findRestaurntById : {},
    },
  };
}
export async function getStaticPaths() {
  const restaurantsReal = await fetchingResturnt();
  restaurants = switchingData(restaurantsReal);
  const paths = restaurants.map((restaurant) => {
    return {
      params: {
        id: restaurant.location_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

const CoffeeStore: NextPage<{ restaurant: RestaurantData }> = (
  initialProps
) => {
  return <SingleRestaurant restaurant={initialProps.restaurant} />;
};

export default CoffeeStore;
