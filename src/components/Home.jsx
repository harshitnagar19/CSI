import React from "react";
import Hero from './heroSection/Hero';
import PastEvents from "./PastEvents";
import AboutCollege from "./AboutCollege";
import UpcomingEvents from "./UpcomingEventa";
import Team from "./Team";
function Home() {
    return (
        <div>
            <Hero />
            <AboutCollege />
            <PastEvents />
            <UpcomingEvents />
            <Team />
        </div>
    )
}


export default Home;
