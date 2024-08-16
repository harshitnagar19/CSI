import React, { useState } from "react";
import Hero from './heroSection/Hero';
import PastEvents from "./PastEvents";
import AboutCollege from "./AboutCollege";
import UpcomingEvents from "./UpcomingEventa";
import Team from "./Team";
import { TracingBeam } from "../ui/tracing-beam";
import Footer from "./footer/Footer";
import { useWindowSize, } from '@react-hook/window-size'
import Confetti from 'react-confetti'
function Home() {
    const [width, height] = useWindowSize()
    return (
        <div  >

            <div
                className="w-full dark:bg-white bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.2]"
            >
                <Confetti
                    width={width - 100}
                    height={height}
                    recycle={false}
                    initialVelocityY={17}
                    gravity={0.5}
                    numberOfPieces={600}
                    drawShape={ctx => {
                        ctx.beginPath()
                        for (let i = 0; i < 22; i++) {
                            const angle = 0.35 * i
                            const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                            const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                            ctx.lineTo(x, y)
                        }
                        ctx.stroke()
                        ctx.closePath()
                    }}
                />
                <Hero />
                <AboutCollege />
                <TracingBeam>
                    <PastEvents />
                </TracingBeam>
                <UpcomingEvents />
                <Team />
                <Footer />
            </div>
        </div>
    )
}


export default Home;
