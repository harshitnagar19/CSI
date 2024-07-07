import React from 'react'
import { Fade } from "react-awesome-reveal";
import Hero from './heroSection/Hero';
function Home() {
    return (
        <div>
            <Fade direction="down" className="text-3xl font-bold underline">
                <Hero/>
            </Fade>
        </div>
    )
}

export default Home
