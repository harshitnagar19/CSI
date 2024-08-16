"use client";
import React, { useState } from 'react'
import { HeroParallax } from "../../ui/hero-parallax";
import "./hero.css";
import { Navbar } from '../navbar/Navbar';
import { Element } from 'react-scroll';

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
    <Element name='home'>
      <div
        onScroll={handleScroll}
        className={'hero-class'}
      >
        <Navbar />
        <HeroParallax products={products}

        />
      </div>
    </Element>
  )
}
export const products = [
  {
    title: "Moonbeam",

    thumbnail:
      "images/1.jpg",
  },
  {
    title: "Editorially",
    thumbnail:
      "images/15.jpg",
  },
  {
    title: "Cursor",

    thumbnail:
      "images/4.jpg",
  },
  {
    title: "Cursor",

    thumbnail:
      "images/12.jpg",
  },
  {
    title: "Cursor",

    thumbnail:
      "images/6.jpg",
  },


  {
    title: "Pixel Perfect",
    thumbnail:
      "images/7.jpg",
  },

  {
    title: "Algochurn",
    thumbnail:
      "images/8.jpg",
  },
  {
    title: "Aceternity UI",
    thumbnail:
      "images/9.jpg",
  },
  {
    title: "Tailwind Master Kit",
    thumbnail:
      "images/10.jpg",
  },
  {
    title: "SmartBridge",
    thumbnail:
      "images/11.jpg",
  },
  {
    title: "Renderwork Studio",
    thumbnail:
      "images/16.jpg1",
  },

  {
    title: "Creme Digital",
    thumbnail:
      "images/12.jpg",
  },
  {
    title: "Golden Bells Academy",
    thumbnail:
      "images/13.jpg",
  },
  {
    title: "Invoker Labs",
    thumbnail:
      "images/15.jpg",
  },
  {
    title: "E Free Invoice",
    thumbnail:
      "images/18.jpg",
  },
];

export default Hero;
