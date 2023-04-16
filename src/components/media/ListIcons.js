import React from 'react'
import { motion, useScroll, MotionConfig } from 'framer-motion'

export const CircleIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
    return (
        <figure className='absolute left-8 stroke-dark dark:stroke-light'>
            <svg classnname="-rotate-90" width="75" height="75" viewBox='0 0 110 110'>
                <circle cx="75" cy="50" r="30" className='terciary dark:stroke-terciary stroke-1 fill-none' />
                <MotionConfig transition={{ reducedMotion: "user" }}>
                    <motion.circle cx="75" cy="50" r="30" className='stroke-[5px]  fill-light dark:fill-dark'
                        style={{
                            pathLength: scrollYProgress
                        }} />
                </MotionConfig>
                <circle cx="75" cy="50" r="15" className='animate-pulse stroke-primary dark:stroke-primaryDark stroke-1
                 fill-primary dark:fill-primaryDark' />
            </svg>
        </figure>
    )
}

export const TargetIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
    return (
        <figure className='absolute left-8'>
            <svg classnname="-rotate-90" width="85" height="85" viewBox='0 0 120 120'>
                <circle cx="75" cy="50" r="35" className='stroke-terciary stroke-1' />
                <MotionConfig transition={{ reducedMotion: "user" }}>
                    <motion.circle cx="75" cy="50" r="35" className='stroke-[15px] stroke-terciary fill-light dark:fill-dark'
                        style={{
                            pathLength: scrollYProgress
                        }}
                    />
                </MotionConfig>
                <circle cx="75" cy="50" r="20" className='fill-dark dark:fill-light' />
            </svg>
        </figure>
    )
}