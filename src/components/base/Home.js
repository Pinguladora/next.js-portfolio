import React from 'react'
import Image from 'next/image'
import profilePic from "../../../public/images/profile/developer.png"
import Link from 'next/link'
import { Trans } from '@lingui/macro'
import { DownloadArrow } from '@/components/media/Icons'
import { motion } from 'framer-motion'
import { TypewriterAnimation, FadeInAnimation } from '@/components/media/TextAnimations'
import { useLingui } from "@lingui/react"
import { useState, useEffect } from 'react';
import { Element } from 'react-scroll'

const Home = () => {
    const [mailSubject, setMailSubject] = useState('');
    const { i18n } = useLingui();

    useEffect(() => {
        const newMailSubject = i18n._({ id: 'contact-subject' });
        setMailSubject(newMailSubject);
    }, [i18n.locale]);

    return (
        <Element name="home-section">
            <section id="home-section" className='flex items-center justify-between w-full'>
                <div className='w-1/2'>
                    <Image src={profilePic} alt="home-img" className='w-full relative h-auto' priority={true} />
                </div>
                <div className='w-1/2 flex flex-col items-center self-center'>
                    <div className="w-full mx-auto py-4 flex items-center justify-center text-center overflow-hidden">
                        <TypewriterAnimation translationId="welcome-title" className='inline-block w-full text-dark dark:text-light font-bold text-6xl capitalize' />
                    </div>
                    <FadeInAnimation translationId="welcome-message" className='my-4 text-base font-medium' />
                    <div className='flex items-center mt-5'>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link href="/[file]" target={"_blank"} as={"/sample.pdf"}
                                className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-5 rounded-lg text-2xl font-semibold 
                                hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light 
                                border border-solid border-transparent hover:border-dark dark:hover:border-light"
                                download={true}
                            >
                                <Trans id="resume" />
                                <DownloadArrow className={'w-6 ml-5 mt-1 overflow-visible [&>g>path:not(:first-child)]:motion-safe:animate-bounce'} />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link href={`mailto:aechegoyan@gmail.com?subject=${encodeURIComponent(mailSubject)}`} target={"_blank"}
                                className="flex items-center bg-light dark:bg-dark text-dark dark:text-light 
                                ml-5 px-5 py-4 rounded-lg text-2xl font-semibold
                                hover:bg-light hover:text-dark  
                                border border-solid border-dark border-opacity-25 hover:border-dark
                                 dark:border-light dark:border-opacity-25 dark:hover:border-light">
                                <Trans id="contact" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Home