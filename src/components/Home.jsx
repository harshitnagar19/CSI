import React from "react";
import { Fade } from "react-awesome-reveal";
import Hero from './heroSection/Hero';
import PastEvents from "./PastEvents";
import AboutCollege from "./AboutCollege";
import UpcomingEvents from "./UpcomingEventa";
function Home() {
    return (
        <div>
            <Hero />
            <AboutCollege />
            <PastEvents />
            <UpcomingEvents />
        </div>
    )
}


export default Home;
