import { Trans } from '@lingui/macro';
import React, { useEffect, useRef, useState } from 'react'
import { Element } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { CircleIcon } from '../media/ListIcons';
import { NextInTimeline } from './Experience';

const Details = ({ translationId, organizationLink }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-left justify-between'>
            <CircleIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}

            >
                <h3 className='font-bold text-2xl text-dark dark:text-light'>
                    <Trans id={`${translationId}-role`} />
                    <a href={organizationLink} className='capitalize text-primary dark:text-primaryDark' target="_blank">
                        &nbsp;|&nbsp;<Trans id={`${translationId}-organization`} />
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    <Trans id={`${translationId}-time`} /> | <Trans id={`${translationId}-address`} />
                </span>
                <p className='font-medium w-full'>
                    <Trans id={`${translationId}-description`} />
                </p>
            </motion.div>
        </li>
    )
};

const Education = () => {

    const controls = useAnimation();
    const [inView, setInView] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setInView(entry.isIntersecting);
                });
            },
            {
                threshold: [0, 1],
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        const updateScrollProgress = () => {
            if (inView && ref.current) {
                const rect = ref.current.getBoundingClientRect();

                // This the next education element height
                // const lastSubcomponentHeight = 200;

                const progress = Math.max(
                    0,
                    Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
                );
                controls.start({ scaleY: progress });
            }
        };

        window.addEventListener("scroll", updateScrollProgress);
        return () => {
            window.removeEventListener("scroll", updateScrollProgress);
        };
    }, [inView, controls]);



    return (
        <Element name="Education" id="education-section">
            <section id="education-section" className='my-64' ref={ref}>
                <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                    <Trans id="education-section" />
                </h2>
                <div className='w-[75%] mx-auto relative'>
                    <motion.div id='education-line'
                        animate={controls}
                        style={{ originY: 0 }}
                        className='absolute left-20 top-0 w-[8px] h-full bg-dark dark:bg-light origin-top' />
                    <ul className='w-full flex flex-col items-start justify-between ml-4'>
                        <Details translationId="education-us" organizationLink={encodeURI("https://www.us.es/")} />
                        <NextInTimeline translationId="to-be-continued" />
                    </ul>
                </div>
            </section>
        </Element>
    )
}

export default Education