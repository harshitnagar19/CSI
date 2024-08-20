import React from "react";
import { winners } from "../data/winners";
import { otherEvents } from "../data/other-events";
import SectionDividerLine from './SectionDividerLine';
import Marquee from "react-fast-marquee";
import "./pastEvent.css";
import { Element } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";
// cards
const Card = ({ image, name, position, domain }) => (
  <div class="card w-[200px] sm:w-[250px] lg:w-[300px] aspect-[3/4] ">
    <img src={image} alt={name} className="w-full h-[70%] rounded-md object-cover" />
    <p class="heading">{name}</p>
    {position && <p >{position}</p>}
    {domain && <p >{domain}</p>}
  </div>

);

export default function PastEvents() {
  return (
   <Element name="pastEvents">
     <div className=" text-white min-h-screen py-8  mx-auto">
      <div className="">
        <h1 className="text-3xl lg:text-5xl font-mono mb-8 ml-8">Past Events</h1>

        <div className="mb-12">
        <Slide trigger direction="right" duration="1000" className=" fade">
        <Fade className="fade" direction="left" duration="1500">
          <h2 className="text-2xl lg:text-4xl font-mono mb-8 text-white  w-48 bg-blue-700 rounded-2xl px-6 py-3 shadow-md shadow-cyan-50 ml-8">Kaushal</h2>
          <p className=" font-mono text-white  max-w-7xl mx-auto text-2xl overflow-hidden border-2 px-4 py-5 rounded-3xl leading-10 shadow-stone-50 shadow-lg  ">
          A technical event is organized by CSI-SVVV every year to help students discover their technical skills and knowledge by participating in various activities like quizzes, code & development, etc. This event is open to students who want to learn, grow, and experience something new.
          </p>
          </Fade>
          </Slide>
        </div>
      </div>

      <div className="mb-12">
      <Slide trigger direction="left" duration="1000" className=" fade">
        <h2 className="text-2xl lg:text-3xl font-mono  w-56 bg-blue-700 rounded-2xl px-6 py-3 shadow-md shadow-cyan-50 mb-10 ml-8">Sub Events</h2>
</Slide>
        <Marquee
          gradient={true}
          gradientColor={"rgba(0,0,0,0.9)"}
          gradientWidth={170}
          className="rounded-3xl"
          speed={80}
          //  pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="flex  justify-between ">
            {winners.map((winner, index) => (
              <Card key={index} {...winner} />
            ))}
          </div>
        </Marquee>

      </div>
      <SectionDividerLine />

      {/* Other Events */}

      <div className="mb-8">
      <Slide trigger direction="left" duration="1000" className=" fade">
        <h2 className="text-2xl lg:text-3xl font-mono ml-8 w-64 bg-blue-700 rounded-2xl px-6 py-3 shadow-md shadow-cyan-50 overflow-hidden mb-8">Other Events</h2>
        </Slide>
        <Marquee
          gradient={true}
          gradientColor={"rgba(0,0,0,0.9)"}
          gradientWidth={170}
          className="rounded-3xl"
          speed={80}
          //  pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          <div className="flex flex-wrap justify-center gap-16 mb-6">
            {otherEvents.map((event, index) => (
              <Card key={index} {...event} />
            ))}
          </div>
        </Marquee>
        <div className="flex justify-center">
          <button className="bg-[#194EEF] text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
            View More
          </button>
        </div>


        <SectionDividerLine />
      </div>

    </div>
   </Element>
  );
}