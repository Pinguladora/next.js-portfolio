import React from 'react'
import goalsVector from "../../../public/images/profile/goals.svg"
import { TypewriterAnimation, FadeInAnimation } from '@/components/media/TextAnimations'
import { Element } from 'react-scroll'
import Image from 'next/image'

const Expectations = () => {

    return (
        <Element name="Expectations" id="expectations-section" >
            <section id="expectations-section" className='flex items-center justify-between w-full my-64'>
                <div className='w-1/2'>
                    <Image src={goalsVector} alt="goals-img" className='w-full relative h-auto' />
                </div>
                <div className='w-1/2 flex flex-col items-center self-center'>
                    <div className="w-full mx-auto py-4 flex items-center justify-center text-center overflow-hidden">
                        <TypewriterAnimation translationId="expectations-title" className='inline-block w-full text-dark dark:text-light font-bold text-6xl capitalize' />
                    </div>
                    <FadeInAnimation translationId="lorem-ipsum" className='my-4 text-base font-medium' />
                </div>
            </section>
        </Element>
    )
}

export default Expectations