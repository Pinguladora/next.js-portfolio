import { Trans } from '@lingui/macro';
import React, { useEffect, useRef, useState } from 'react'
import { Element } from 'react-scroll';
import { motion, useAnimation, MotionConfig } from 'framer-motion';
import { CircleIcon, TargetIcon } from '../media/ListIcons';


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

export const NextInTimeline = ({ translationId }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 w-[60%] mx-auto flex flex-col items-left justify-between'>
            <TargetIcon reference={ref} onScroll={true}/>
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}

            >
                <h3 className=' font-bold text-4xl text-dark dark:text-light'>
                    <Trans id={translationId} />
                </h3>
            </motion.div>
        </li>
    )
};

const Experience = () => {

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

                // This the next job element height
                // const lastSubcomponentHeight = 50;

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
        <Element name="Experience" id="experience-section">
            <section id="experience-section" className='my-64' ref={ref}>
                <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                    <Trans id="professional-experience" />
                </h2>
                <div className='w-[75%] mx-auto relative'>
                    <motion.div id='experience-line'
                        animate={controls}
                        style={{ originY: 0 }}
                        className='absolute left-20 top-0 w-[8px] h-full bg-dark dark:bg-light origin-top'
                    />
                    <ul className='w-full flex flex-col items-start justify-between ml-4'>
                        <Details translationId="experience-youforget" organizationLink={encodeURI("https://youforget.me/")} />
                        <NextInTimeline translationId={"next-job-proposal"} />
                    </ul>
                </div>
            </section>
        </Element>
    )
}

export default Experience