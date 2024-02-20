import React from "react";
import Head from "next/head";
import SubNav from "@/components/SubNav/SubNav";
import NewsHead from "@/components/NewsHead/NewsHead";
import Videos from "@/components/Videos/Videos";
import Cards from "@/components/Cards/Cards";
import RightSide from "@/components/RightSide/index.js";
import Divider from "@/components/Divider/Divider";
import Social from "@/components/Social/Social";
import { use, useState } from "react";
function nfl() {
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
          <SubNav />
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <NewsHead img={"/March-Madness-Live.jpg.webp"} />
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
            <div className="col-sm-12 col-lg-4">
              <RightSide />
              <Social />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default nfl;
