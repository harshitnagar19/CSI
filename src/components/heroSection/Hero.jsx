"use client";
import React, { useState } from 'react'
import { HeroParallax } from "../../ui/hero-parallax";
import "./hero.css";
import { Navbar } from '../navbar/Navbar';
function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);
    console.log(scrollPosition)
  };

  return (
    <div
      onScroll={handleScroll}
      className={'hero-class'}
    >
      <Navbar />
      <HeroParallax products={products}

      />
    </div>
  )
}
export const products = [
  {
    title: "Moonbeam",

    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394407854_661821139386077_3393138086445287603_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=iSgaFrDwcHEQ7kNvgEnH9rG&_nc_ht=scontent.frpr5-1.fna&oh=00_AYBVhO0Et92K8O11B54T9I5JJAb2gBrMUlI76KmGHA09Gw&oe=66B44E74",
  },
  {
    title: "Editorially",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394524100_661820062719518_5553354846524753359_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=02NErEg4SI8Q7kNvgHTxPg8&_nc_ht=scontent.frpr5-1.fna&oh=00_AYDi6lJ3gi09NSh8yNnrOkdmxX2hsGtRc_TFz1lNXyBaeA&oe=66B42D7D",
  },
  {
    title: "Cursor",

    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394355842_661784109389780_6328665765551797346_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=xFJ9l5vMg2wQ7kNvgFC3FPx&_nc_ht=scontent.frpr5-1.fna&oh=00_AYBfhZzHDnt-nRlnK2O68dTVKihC3mwp3YNd7pZbA6sxiQ&oe=66B41E4F",
  },
  {
    title: "Rogue",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394710436_661788846055973_1708568801802530305_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=J7IfKJf-2YQQ7kNvgHZZBHy&_nc_ht=scontent.frpr5-1.fna&oh=00_AYADi5_x7pJwjlIFfrx6SBpqAWJNCHL-56dUogr2OhkITQ&oe=66B43642",
  },
  {
    title: "Editrix AI",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394036454_661841236050734_2755256402745406275_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=DjksH8TQaSkQ7kNvgGoAB3b&_nc_ht=scontent.frpr5-1.fna&oh=00_AYAXLAT4C81QWJMvqwez5aPyc-A1vNyAdROLKMSp1up6BA&oe=66B43FBD",
  },



  {
    title: "Pixel Perfect",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394392430_661786349389556_8448857218706356288_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=VXwqfDyyorgQ7kNvgGzaHJF&_nc_ht=scontent.frpr5-1.fna&oh=00_AYC48lnqgJZ0GPXP2ANblC-IKxlrKhMTmPJuwad-_y_8Qg&oe=66B43EF9",
  },

  {
    title: "Algochurn",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394039579_661844839383707_5675017185449611946_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ODHhlLr04_AQ7kNvgFdmmnC&_nc_ht=scontent.frpr5-1.fna&oh=00_AYC8ycP2vsGiShL8bwPDtdLeFz9OnPfAfWZBEfFiJGf-kw&oe=66B42FC3",
  },
  {
    title: "Aceternity UI",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394681895_661820252719499_6412697551067781787_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=roztkExHDbMQ7kNvgHkltWr&_nc_ht=scontent.frpr5-1.fna&oh=00_AYCl-HZJwyCtfQ06U0FdFvOiAPqo-uHc0iTLmCTROo7xqg&oe=66B451D8",
  },
  {
    title: "Tailwind Master Kit",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394452189_661845079383683_8105138942443232701_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rGoe_p8zwt8Q7kNvgEBykYR&_nc_ht=scontent.frpr5-1.fna&oh=00_AYCzwgr8jtG9BEeFOn5Ccf8lBc1JZGXw5oCt_mGgOzMasw&oe=66B42A5E",
  },
  {
    title: "SmartBridge",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394330098_662377655997092_6739174882297173122_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=mWDOztzQRawQ7kNvgEhsrRC&_nc_ht=scontent.frpr5-1.fna&oh=00_AYCKobsi8v7qvB9gw2Px0FJhVD4YsLfvkw9R4VdBpDza1w&oe=66B45031",
  },
  {
    title: "Renderwork Studio",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394051584_661845576050300_6865418083907683418_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ZmaxFRTk8OcQ7kNvgFXbxBO&_nc_ht=scontent.frpr5-1.fna&oh=00_AYCzWnoG3GbwlgazY1RgwlXm6CjwXspNuIXHL4KOsTP53A&oe=66B42813",
  },

  {
    title: "Creme Digital",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394380905_662377562663768_4057887480950409180_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=505BGY-MMyIQ7kNvgGVTh03&_nc_ht=scontent.frpr5-1.fna&oh=00_AYDGtY5AeVA2RmXqzYxNzxAiWENkLiQticUBa0YnUbzfSg&oe=66B44144",
  },
  {
    title: "Golden Bells Academy",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394324020_662376655997192_7829603275687121864_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=PkqmouIU2qgQ7kNvgFdLixJ&_nc_ht=scontent.frpr5-1.fna&oh=00_AYB12rPeCmhZeDnhTQJNUbpVLSrAAlgjh8-DyZnGguUTRg&oe=66B446C9",
  },
  {
    title: "Invoker Labs",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394005428_661844526050405_3430944101914743479_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=idk6JUZ7GE4Q7kNvgFwnJJx&_nc_ht=scontent.frpr5-1.fna&oh=00_AYCQkPAfFfOtHntfqrOJujAJ6HIjqN29uWwIg0_QCCQVow&oe=66B439C6",
  },
  {
    title: "E Free Invoice",
    thumbnail:
      "https://scontent.frpr5-1.fna.fbcdn.net/v/t39.30808-6/394072293_661842149383976_8551315070898668561_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Jcjp86bKVagQ7kNvgGoBUzU&_nc_ht=scontent.frpr5-1.fna&oh=00_AYCuLtwvaIdr5lnh5ec_Q66xApjItDD1sWO6AFTFr-GOsg&oe=66B43F14",
  },
];

export default Hero;
