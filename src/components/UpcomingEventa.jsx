import React from 'react';
import codejamImg from '../data/code-jam.svg';
import SectionDividerLine from './SectionDividerLine';
import { Upcomming } from '../data/other-events';

const EventCard = ({ date, description }) => (
    <div className="flex border-2 rounded-lg overflow-hidden mb-4 h-24">
      <div className="border-r-2 p-4 w-1/4 flex items-center justify-center">
        <span className="font-bold text-sm">{date}</span>
      </div>
      <div className="p-4 w-3/4">
        <p>{description}</p>
      </div>
    </div>
  );
const UpcomingEvents = () => {
  

  return (
    <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl lg:text-4xl font-mono mb-8">Upcoming Events</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="md:w-1/3">
          <div className="border-[#194EEF] rounded-3xl border-4 overflow-hidden mb-6">
            <img
              src={codejamImg}
              alt="Computer guy coding"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="">
            {Upcomming.map((event, index) => (
              <EventCard key={index} date={event.date} description={event.description} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#194EEF] text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          View More
        </button>
      </div>
      <SectionDividerLine />
    </div>
  );
};

export default UpcomingEvents;