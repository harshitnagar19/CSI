import React from "react";
import { winners } from "../data/winners";
import { otherEvents } from "../data/other-events";
import SectionDividerLine from './SectionDividerLine';
import Marquee from "react-fast-marquee";
import "./pastEvent.css";
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
    <div className=" text-white min-h-screen py-8  mx-auto">
      <h1 className="text-3xl lg:text-5xl font-mono mb-8">Past Events</h1>

      <div className="mb-12">
        <h2 className="text-2xl lg:text-4xl font-mono mb-4">Kaushal</h2>
        <p className="text-sm lg:text-xl font-mono">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          dolorem voluptas temporibus minus ut consequuntur molestias? Ut neque,
          architecto nulla dolor commodi doloribus a debitis, quibusdam
          repudiandae possimus blanditiis deserunt!
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl lg:text-4xl font-mono mb-4">Winners</h2>

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
          <div className="flex gap-16 justify-around ">
            {winners.map((winner, index) => (
              <Card key={index} {...winner} />
            ))}
          </div>
        </Marquee>

      </div>
      <SectionDividerLine />

      {/* Other Events */}

      <div className="mb-8">
        <h2 className="text-2xl lg:text-4xl font-mono mb-4">Other Events</h2>
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
  );
}