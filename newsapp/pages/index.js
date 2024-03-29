import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Slider from "@/components/Slider/Slider";
import NewsHead from "@/components/NewsHead/NewsHead";
import Videos from "@/components/Videos/Videos";
import Cards from "@/components/Cards/Cards";
import RightSide from "@/components/RightSide/index.js";
import Divider from "@/components/Divider/Divider";
import Social from "@/components/Social/Social";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [home] = useState(true);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <NewsHead />
              <div className="row">
                <Cards
                  text={
                    "USA on to WBC semis after wild win over Venezuela powered by Trea Turner slam"
                  }
                  img={"./card1.jpg"}
                  link={"/"}
                />
                <Cards
                  text={"win over Venezuela powered by Trea Turner slam"}
                  img={"./card2.jpg"}
                  link={"/"}
                />
                <Cards
                  text={" Trea Turner slam"}
                  img={"./card3.jpg"}
                  link={"/"}
                />
                <Cards
                  text={
                    "USA on to WBC semis after wild win over Venezuela powered by Trea Turner slam"
                  }
                  img={"./card4.jpg"}
                  link={"/"}
                />
                <Cards
                  text={"win over Venezuela powered by Trea Turner slam"}
                  img={"./card5.jpeg"}
                  link={"/"}
                />
                <Cards
                  text={" Trea Turner slam"}
                  img={"./card6.jpg"}
                  link={"/"}
                />
              </div>
              <Divider title="Latest Videos" />
              <Videos />
            </div>
            <div className="col-lg-4">
              <RightSide />
              <Social home={home} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
