import React, { useState } from 'react';
import { team } from '../data/team';

export default function Team() {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? team : team.slice(0, 6);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleMinimize = () => {
    setShowAll(false);
  };

  return (
    <div className='px-4 py-8 max-w-7xl mx-auto text-white'>
      <h1 className="text-3xl lg:text-5xl font-mono mb-8">Team</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {visibleCards.map((member, index) => (
          <div key={index} className="rounded-3xl border-4 flex flex-col items-center w-full sm:w-[250px] lg:w-[300px] aspect-[3/4] overflow-hidden">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[70%] object-cover"
            />
            <div className="p-4 text-center w-full">
              <h3 className="text-xl lg:text-2xl font-semibold truncate">{member.name}</h3>
              {member.position && <p className="text-sm lg:text-base truncate">{member.position}</p>}
              {member.domain && <p className="text-sm lg:text-base truncate">{member.domain}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center"> {/* Added this div */}
        {!showAll ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleLoadMore}
          >
            View More
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleMinimize}
          >
            Minimize
          </button>
        )}
      </div> {/* Added this closing div */}
    </div>
  );
}
