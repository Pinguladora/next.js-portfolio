import React from 'react'
import { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { useLingui } from '@lingui/react';

const quote = {
    initial: { opacity: 1, },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.7,
            staggerChildren: 0.04,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 40
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

export const FadeInAnimation = ({ translationId, split = false, className = "" }) => {

    const { i18n } = useLingui();
    const translatedText = i18n._(translationId);

    const finalMessage = () => {
        let res
        if (split) {
            res = translatedText.split(' ').map((word, index) =>
                <motion.span key={word + '-' + index} className="inline-block" variants={singleWord}>
                    {word}&nbsp;
                </motion.span>
            )
        } else {
            res = <motion.span className="inline-block" variants={singleWord}>
                {`${translatedText}`}
            </motion.span>
        }
        return res;
    }
    return (
        <div className='w-full mx-auto py-4 flex items-center justify-center text-center overflow-hidden'>
            <MotionConfig transition={{ reducedMotion: "user" }}>
                <motion.p className={`inline-block w-full text-dark dark:text-light font-bold text-6xl ${className}`}
                    variants={quote} initial="initial" animate="animate"
                >
                    {finalMessage()}
                </motion.p>
            </MotionConfig>
        </div>
    )
}

export const TypewriterAnimation = ({ translationId, delay = 120, className = "" }) => {

    const [visibleText, setVisibleText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    const { i18n } = useLingui();

    // Handle resetting the text to re-do animation on locale change
    useEffect(() => {
        setVisibleText('');
        setCharIndex(0);
    }, [i18n.locale, translationId]);

    // Handles typewriter animation
    useEffect(() => {
        const translatedText = i18n._(translationId);

        const interval = setInterval(() => {
            if (charIndex < translatedText.length) {
                setVisibleText((visibleText) => visibleText + translatedText[charIndex]);
                setCharIndex(charIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [i18n.locale, translationId, delay, charIndex]);

    return (
        <p className={`${className} blinking-cursor`}>
            {visibleText}
        </p>
    );
};