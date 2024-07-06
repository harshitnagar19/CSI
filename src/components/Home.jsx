import React from 'react'
import { Fade } from "react-awesome-reveal";
import PastEvents from './PastEvents';
import AboutCollege from './AboutCollege';
function Home() {
    return (
        <div className='bg-blue-bg text-white px-3 sm:px-5 md:px-10'>
            <Fade direction="down" className="text-3xl font-bold underline">
                <p>Markup that will be revealed on scroll</p>
            </Fade>
            <AboutCollege />
            <PastEvents />
        </div>
    )
}

export default Home
