"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  
} from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

export const HeroParallax = ({
  products,
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const [bgClass, setBgClass] = useState("bg-black")
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const scrollDistance = latest * ref.current.offsetHeight;
      if (scrollDistance >= 500) {
        setBgClass(" ");
      } else {
        setBgClass("bg-black");
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <div
      ref={ref}
      className={`${bgClass} h-[365vh]  overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]`}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <div className=" max-w-7xl relative  mx-auto py-10 md:py-20 px-4 w-full  left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold text-white mt-20">
          Computer Socity of India - SVVV <br /> Tech Community
        </h1>
        <p className="max-w-6xl text-base md:text-xl mt-8 text-neutral-200">


          The Computer Society of India (CSI) is the oldest and largest organization of IT and allied professionals in India. As a non-profit professional society, CSI is dedicated to computing, facilitating the exchange of views and information, and fostering learning and idea-sharing.

          CSI Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV) connects you with the broader CSI community, providing you with opportunities to engage with recent technological advancements and innovations. Through CSI-SVVV, you can stay informed about the latest developments in IT and enhance your skills in the ever-evolving field of technology.
        </p>
        <div className="relative z-20 flex justify-center mt-20">
          <a href="https://chat.whatsapp.com/DGfZeut8mD1B8Kz47aRgch"> <button className="join-us-btn">Join Us <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button></a></div>
      </div>

    </>
  );
};

export const ProductCard = ({
  product,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      {/* <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-pink-600 pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2> */}
    </motion.div>
  );
};
