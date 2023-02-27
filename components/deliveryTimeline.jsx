import React, { useEffect, useState, useRef } from 'react'
import { Box, Progress, Flex, Center } from "@chakra-ui/react"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const DeliveryTimeline = () => {
    const [time, setTime] = useState(0);
    let intervalID = useRef(null);


    useEffect(() => {
        if (time < 100) {
            intervalID.current = setInterval(() => {
                setTime((time) => time + 1);
            
            }, 100);
        }
        return () => clearInterval(intervalID.current);
    }, [time]);

    return (
        <Box width="100%" height="100%" justify="center" >
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
                                🌑
                            </div>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished, index }) => (
                            <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                            >
                                🌒
                            </div>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished, index }) => (
                            <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                            >
                                🌓
                            </div>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished, index }) => (
                            <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                            >
                                🌔
                            </div>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished, index }) => (
                            <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                            >
                                🌕
                            </div>
                        )}
                    </Step>
                </ProgressBar>
            </Box>



        </Box>
    )
}

export default DeliveryTimeline
