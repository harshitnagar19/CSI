import React from "react";
import { winners } from "../data/winners";
import { otherEvents } from "../data/other-events";

const Card = ({ image, name, position, domain }) => (
  <div className="border-[#194EEF] rounded-3xl border-4 flex flex-col items-center w-full sm:w-[250px] lg:w-[300px] aspect-[3/4] overflow-hidden">
    <img
      src={image}
      alt={name}
      className="w-full h-[70%] object-cover"
    />
    <div className="p-4 text-center w-full">
      <h3 className="text-xl lg:text-2xl font-semibold truncate">{name}</h3>
      {position && <p className="text-sm lg:text-base truncate">{position}</p>}
      {domain && <p className="text-sm lg:text-base truncate">{domain}</p>}
    </div>
  </div>
);

export default function PastEvents() {
  return (
    <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
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
        <div className="flex flex-wrap justify-center gap-6">
          {winners.map((winner, index) => (
            <Card key={index} {...winner} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl lg:text-4xl font-mono mb-4">Other Events</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {otherEvents.map((event, index) => (
            <Card key={index} {...event} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-[#194EEF] text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}