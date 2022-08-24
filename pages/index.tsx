import type { NextPage } from "next";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useState } from "react";
import BannerComponent from "../components/banner/Banner.component";
import StoresComponent from "../components/stores/Stores.component";
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
  console.log("333", props.restaurants);
  const [buttonText, setButtonText] = useState<string>("view stores nearby");
  const handderChangeButton = (text: string) => {
    setButtonText(text);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Finder</title>
      </Head>
      <main className={styles.main}>
        <BannerComponent
          buttonText={buttonText}
          handderChangeButton={handderChangeButton}
        />
        {typeof props.restaurants !== "string" ? (
          <StoresComponent restaurants={props.restaurants} />
        ) : (
          <h1>{props.restaurants}</h1>
        )}
      </main>
    </div>
  );
};

export default Home;
