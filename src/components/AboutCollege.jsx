import React from "react";
import clgImg from "../data/college-image.svg";

export default function AboutCollege() {
  return (
    <div className=" w-10/12 mx-auto flex flex-col items-center gap-8 min-h-screen ">
      <h1 className={`font-extrabold text-4xl`}>About college</h1>
      <div className="flex gap-x-20 justify-center items-center flex-wrap">
        <div className="w-full sm:w-[45%] mb-4 border-8 overflow-hidden  rounded-3xl mt-2 ">
          <img src={clgImg} alt="" className="w-full" />
        </div>

        <div className="flex flex-col gap-10 lg:w-[45%] px-4 mt-4 md:mt-0 md:px-10">
          <h2 className={`text-2xl font-semibold `}>
            Shri Vaishnav Vidyapeeth Vishwavidyalaya
          </h2>
          <p>
            Shri Vaishnav Vidyapeeth Trust believes in taking the nation forward
            by improving the quality of life of its citizens by continuously
            working in the sphere of education, health and environment.To create
            an educational environment that engages deep intellectual moral and
            spiritual stimulation there by nurturing leadership. To impact
            learning through understanding knowledge enrichment skill
            development and positive attitude formation.To encourage innovation
            thinking with self discipline & social responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}
