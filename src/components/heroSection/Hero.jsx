"use client";
import React, { useState } from 'react'
import { HeroParallax } from "../../ui/hero-parallax";
import "./hero.css";
import { Navbar } from '../navbar/Navbar';
import { Element } from 'react-scroll';
import {  Slide } from "react-awesome-reveal";

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
    <Element name='home' >
      
      <div
        onScroll={handleScroll}
        className={'hero-class'}
      >
        <Navbar />
        <HeroParallax products={products}

        />
      </div>
      <Slide trigger direction="up" duration="1000" className="flex justify-center fade">
        
        <h1 className='text-white text-3xl mb-8  bg-blue-700 rounded-2xl px-5 py-3 shadow-md shadow-cyan-50 overflow-hidden'>Team Experience</h1>
      <p  className=' text-white   max-w-7xl mx-auto text-3xl overflow-hidden border-2 px-4 py-5 rounded-3xl leading-10 shadow-stone-50 shadow-lg  '>Our team enjoyed the events together, showcasing the strong bond and shared values that make CSI-SVVV more than just a community. We believe in celebrating our successes and creating memorable experiences that bring us closer as a team, developing a lifetime shared bond.
      </p>
      </Slide>
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
