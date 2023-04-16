import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const IconWheel = ({ icons, size = 500, itemIndex, activeItemIndex, className = "" }) => {

  const wheelRef = useRef();
  const iconCount = icons.length;

  useEffect(() => {
    const radius = size / 2;
    const angleStep = (2 * Math.PI) / iconCount;

    icons.forEach((icon, index) => {
      const angle = index * angleStep;
      const x = radius * (1 + Math.cos(angle));
      const y = radius * (1 + Math.sin(angle));
      const img = wheelRef.current.querySelector(`#icon-${icon.id}`);
      img.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });

  }, [iconCount, size]);

  return (
    <motion.div
      ref={wheelRef}
      className={`relative bg-secondaryAccent rounded-full ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        margin: '0 auto',
      }}
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 60,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      {icons.map((icon, index) => (
        <motion.div
          key={icon.id}
          id={`icon-${icon.id}`}
          className="absolute top-0 left-0"
        >
          <motion.div
            className='relative'
            animate={{ rotate: [360, 0] }}
            transition={{
              duration: 60,
              ease: 'linear',
              repeat: Infinity,
            }}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: itemIndex === activeItemIndex ? 1 : 0,
                y: itemIndex === activeItemIndex ? 0 : -100,
              }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <Image src={icon.src} alt={`icon-${icon.name}`} height={icon.size} className="block" />
              <p className="mt-5 font-bold text-3xl">{icon.name}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IconWheel;
