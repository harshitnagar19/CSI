import React from 'react'
import { Fade } from "react-awesome-reveal";
function Home() {
    return (
        <div>
            <Fade direction="down" className="text-3xl font-bold underline">
                <p>Markup that will be revealed on scroll</p>
            </Fade>
        </div>
    )
}

export default Home
