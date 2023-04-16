import React, { useEffect } from 'react'
import aboutVector from "../../../public/images/profile/broken-devices.svg"
import { TypewriterAnimation, FadeInAnimation } from '@/components/media/TextAnimations'
import { Element } from 'react-scroll'
import Image from 'next/image'

const About = () => {

    return (
        <Element name="About" id="about-section">
            <section id="about-section" className='flex items-center justify-between w-full my-64'>
                <div className='w-1/2'>
                    <div className="w-full mx-auto py-4 flex items-center justify-center text-center overflow-hidden">
                        <TypewriterAnimation translationId="about-title" className='inline-block w-full text-dark dark:text-light font-bold text-6xl capitalize' />
                    </div>
                    <FadeInAnimation translationId="lorem-ipsum" className='my-4 text-base font-medium' />
                </div>
                <div className='w-1/2 flex flex-col items-center self-center'>
                    <Image src={aboutVector} alt="about-img" className='w-full relative h-auto' />
                </div>
            </section>
        </Element>
    )
}

export default About