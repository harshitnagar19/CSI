import React from "react";
import clgImg from "../data/college-image.svg";
// import SectionDividerLine from "./SectionDividerLine";
import "./aboutcollege.css"
import { Zoom, Fade, Slide } from "react-awesome-reveal";
// import { AnimatePresence, motion } from "framer-motion";
import { Element } from "react-scroll";
// import { cn } from "../utils/cn";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
export default function AboutCollege() {
  const imageUrl = clgImg;
  return (
   <Element  name="aboutCollege">
     <div className="pt-40 w-full mx-auto flex flex-col items-center gap-8 min-h-screen text-white">
      {/* style line */}
      <div className="about w-full h-3 ">
        <div className="line-styling">
          <div className="style-circle bg-blue-500" ></div>
          <div className="style-circle bg-blue-500" ></div>
          <div className="style-line bg-blue-500" ></div>
        </div>
      </div>
      {/* style line end */}

      {/*  */}
      <div className="about-body ">
        <div className="about-description">
          <Fade className="fade" direction="left" duration="1500"> <h1 className="text-blue-500">About College</h1></Fade>
          <Zoom >
            <p className='mb-5 text-white' >Shri Vaishnav Vidyapeeth Vishwavidyalaya</p>

            <p className="text-white">  Shri Vaishnav Vidyapeeth Trust believes in taking the nation forward
              by improving the quality of life of its citizens by continuously
              working in the sphere of education, health and environment.To create
              an educational environment that engages deep intellectual moral and
              spiritual stimulation there by nurturing leadership. To impact
              learning through understanding knowledge enrichment skill
              development and positive attitude formation.To encourage innovation
              thinking with self discipline & social responsibility.</p>
          </Zoom>
        </div>
        <Slide triggerOnce direction="right" duration="2000" className="flex justify-center">
          <div className="relative px-12  h-[50%] md:h-screen w-fit flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl} className="h-3/4 w-fit">
              {/* <p className="font-bold text-xl">In the Indore</p> */}
              {/* <p className="font-normal text-sm">$1299 / night</p> */}
            </DirectionAwareHover>
          </div>
          </Slide>
      </div>

      {/*  */}

      {/* style line */}

      <div className="about w-full h-3 ">
        <div className="line-styling">
          <div className="style-circle bg-blue-500" ></div>
          <div className="style-circle bg-blue-500" ></div>
          <div className="style-line bg-blue-500" ></div>
        </div>
      </div>


      {/* style line end */}
    </div>
   </Element>
  );
}
