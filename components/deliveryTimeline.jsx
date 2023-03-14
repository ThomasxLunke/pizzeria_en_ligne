/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import { Box } from "@chakra-ui/react"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Player } from '@lottiefiles/react-lottie-player';


const DeliveryTimeline = () => {
    const [time, setTime] = useState(0);
    let intervalID = useRef(null);


    useEffect(() => {
        if (time < 100) {
            intervalID.current = setInterval(() => {
                setTime((time) => time + 1);

            }, 200);
        }
        return () => clearInterval(intervalID.current);
    }, [time]);


    return (
        <Box width="90%" height="100%" justify="center" marginX="auto" >
                <Box height="100%" paddingTop="95px" paddingX="40px" >
                    <ProgressBar
                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                        percent={time}
                    >
                        <Step transition="scale">
                            {({ accomplished, index }) => (
                                <div
                                    className={`transitionStep ${accomplished ? "accomplished" : null}`}
                                >
                                    <Player
                                        src='https://assets5.lottiefiles.com/packages/lf20_hj1fgdyd.json'
                                        className="player"
                                        loop
                                        autoplay
                                        speed={1}
                                        style={{ width: 60, height: 60,background: "white"  }}
                                    />
                                </div>
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished, index }) => (
                                <div
                                    className={`transitionStep ${accomplished ? "accomplished" : null}`} style={{ paddingBottom: "20px" }}
                                >
                                    <Player
                                        src='https://assets1.lottiefiles.com/packages/lf20_0lzv8w7z.json'
                                        className="player"
                                        loop
                                        autoplay
                                        speed={1}
                                        style={{ width: 80, height: 80, background: "white" }}
                                    />
                                </div>
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished, index }) => (
                                <div
                                    className={`transitionStep ${accomplished ? "accomplished" : null}`}
                                >
                                    <Player
                                        src='https://assets3.lottiefiles.com/packages/lf20_oV72KM.json'
                                        className="player"
                                        loop
                                        autoplay
                                        speed={1}
                                        style={{ width: 100, height: 100, background: "white" }}
                                    />
                                </div>
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished, index }) => (
                                <div
                                    className={`transitionStep ${accomplished ? "accomplished" : null}`}
                                >
                                    <Player
                                        src='https://assets1.lottiefiles.com/packages/lf20_nn1k7kge.json'
                                        className="player"
                                        loop
                                        autoplay
                                        speed={1}
                                        style={{ width: 120, height: 100, background: "white" }}
                                    />
                                </div>
                            )}
                        </Step>

                    </ProgressBar>
                </Box>
        </Box>
    )
}

export default DeliveryTimeline
