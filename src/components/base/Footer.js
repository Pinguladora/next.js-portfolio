import React from 'react'
import Image from 'next/image'
import framerMotionLogo from "../../../public/images/logos/frontend/other-libraries/framer-motion.svg"
import linguiLogo from "../../../public/images/logos/frontend/other-libraries/lingui.svg"
import nextjsLogo from "../../../public/images/logos/frontend/frameworks/js/next.svg"
import tailwindcssLogo from "../../../public/images/logos/frontend/frameworks/css/tailwind.svg"
import { motion } from 'framer-motion'
import { Trans } from '@lingui/macro'

const Footer = () => {
    return (
        <footer className='w-full p-32 
            py-8 flex flex-col md:flex-row justify-between  bg-secondary dark:secondaryDark
            font-medium text-lg text-light dark:text-light'
        >
            <div className='flex flex-col mb-5 md:mb-0 md:items-start md:justify-center text-center md:text-left'>
                <span className='flex mx-auto text-sm md:text-lg md:mx-0'>
                    <Trans id="copyright" />
                </span>
                <span className='flex mx-auto text-sm md:text-lg md:mx-0'>
                    <Trans id="inspired-by" />
                    <a href='https://devdreaming.com/' className='text-primary'>
                        &nbsp;@CodeBucks
                    </a>
                </span>
            </div>
            <motion.div className='flex flex-col items-center md:items-start mt-5 md:mt-0'>
                <span className='mb-2 text-sm md:text-lg'>
                    <Trans id="powered-by" />
                </span>
                <div className='md:mx-0 flex flex-row items-center md:justify-start space-x-6'>
                    <Image src={nextjsLogo} alt="nextjs-logo" className='w-12 md:w-24 lg:w-20' />
                    <Image src={linguiLogo} alt="lingui-logo" className='w-10 md:w-10 lg:w-24' />
                    <Image src={framerMotionLogo} alt="framerMotion-logo" className='w-4 md:w-7 lg:w-20' />
                    <Image src={tailwindcssLogo} alt="tailwind-logo" className='w-20 md:w-24 lg:w-28 ' />
                </div>
            </motion.div>
        </footer>

    )
}

export default Footer