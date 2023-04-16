import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


const MotionLink = motion(Link);

const Logo = () => {
  return (
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center rounded-full text-2xl font-bold font-majormono"
        transition={{
          delay: 0.1,
          duration: 0.4,
        }}
        animate={{
          scale: [1.4, 1.2, 1],
          rotate: [270, 135, 0],
          borderRadius: ["20%", "35%", "50%"],

        }}
      >
        AE
      </MotionLink>
  )
}

export default Logo
