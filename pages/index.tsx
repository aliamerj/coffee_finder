import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import BannerComponent from "../components/banner.component/Banner.component";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
      </main>
    </div>
  );
};

export default Home;
