import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from '../media/Icons';

const SectionScroller = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset;
      const show = y > 100;
      setShowButton(show);

       if (y + window.innerHeight >= document.body.scrollHeight) {
        setScrollDirection('up');  // Goes up if there is no more content
      } else {  
        setScrollDirection('down'); // Goes down the page
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = (duration) => {
    window.scrollTo({ top: 0, behavior: 'smooth', duration: duration });
  };

  const scrollMore = () => {
    const currentScroll = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (currentScroll + windowHeight >= bodyHeight) {
      scrollToTop();
    } else {
      window.scrollTo({ top: currentScroll + windowHeight, behavior: 'smooth' });
    }
  };



  const handleButtonClick = () => {
    if (scrollDirection === 'up') {
      scrollToTop();
    } else if (scrollDirection === 'down') {
      scrollMore();
    }
  };

  return (
    <div className="fixed bottom-0 right-0 mb-10 mr-10 z-100">
      <button
        className={`rounded-full bg-dark dark:bg-light text-light dark:text-dark 
        border-solid border-4 border-black dark:border-light
        ${showButton ? 'lg:block scale-100 animate-bounce' : 'hidden scale-50'}`}
        onClick={handleButtonClick}
      >
        {scrollDirection === 'up' ? (<ArrowUp />) : scrollDirection === 'down' ? ( <ArrowDown />) : ( <ArrowUp />)}
      </button>
    </div>
  );
};

export default SectionScroller;
