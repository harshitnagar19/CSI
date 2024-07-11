import React, { useState } from "react";
import Hero from './heroSection/Hero';
import PastEvents from "./PastEvents";
import AboutCollege from "./AboutCollege";
import UpcomingEvents from "./UpcomingEventa";
import Team from "./Team";
import { TracingBeam } from "../ui/tracing-beam";
function Home() {


    return (
        <div  >
            <div
                className="w-full dark:bg-white bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.2]"
            >
                <Hero />
                <AboutCollege />
                <TracingBeam>
                    <PastEvents />
                </TracingBeam>
                <UpcomingEvents />
                <Team />
            </div>
        </div>
    )
}


export default Home;
