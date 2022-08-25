import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import BannerComponent from "../components/banner/Banner.component";
import StoresComponent from "../components/stores/Stores.component";
import { restaurantsFake } from "../Data/restaurant";
import styles from "../styles/Home.module.css";
import { RestaurantData } from "../types/Types";
import { fetchingResturnt } from "../utils/fetchingResturnt";

export async function getStaticProps() {
  const restaurants = await fetchingResturnt();
  return {
    props: {
      restaurants,
    },
  };
}

const Home: NextPage<{ restaurants: RestaurantData[] }> = (props) => {
  const [postion, setPostion] = useState<string>("");
  const [restaurants, setRestaurants] = useState<RestaurantData[]>(
    props.restaurants
  );
  const setPostionHandler = (postion: string) => {
    setPostion(postion);
  };
  useEffect(() => {
    const getRestaurantsWithPostion = async () => {
      const restaur = await fetchingResturnt(postion);
      setRestaurants(restaur);
    };
    getRestaurantsWithPostion();
  }, [postion]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Finder</title>
      </Head>
      <main className={styles.main}>
        <BannerComponent setPostionHandler={setPostionHandler} />

        {typeof restaurants !== "string" ? (
          <StoresComponent restaurants={restaurants} />
        ) : (
          <>
            <h1>{restaurants}</h1>
            <StoresComponent restaurants={restaurantsFake} />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
