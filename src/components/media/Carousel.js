import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trans } from '@lingui/macro';

export const Carousel = ({ items, switchInterval = 60000 }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, switchInterval);

    return () => {
      clearInterval(interval);
    };
  }, [switchInterval, items.length]);

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center font-bold text-5xl">
        <Trans id={items[activeIndex]?.titleId} />
      </h3>
      <div className="w-full ">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full my-40 transition-opacity duration-500 ${index === activeIndex ? 'block' : 'hidden'
              }`}
          >
            {React.cloneElement(item.component, { itemIndex: index, activeItemIndex: activeIndex })}
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-6 h-6 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
