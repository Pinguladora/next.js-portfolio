import { Trans } from '@lingui/macro';
import { Link as ScrollLink } from 'react-scroll';
import React, { useRef } from 'react';

const NavigationLink = ({ translationId, activeClassName, className = "" }) => {

    const linkRef = useRef(null);

    return (
        <ScrollLink
            activeClass={activeClassName}
            to={translationId}
            spy={true}
            smooth={true}
            duration={500}
            ref={linkRef}
            className={`${className} relative group cursor-pointer`}
        >
            <Trans id={translationId} />
            <span className={`h-[1px] inline-block w-0 absolute left-0 -bottom-1.5
                group-hover:w-full transition-[width] ease duration-300
                ${linkRef.current?.state.active == true ? 'h-[5px] w-full bg-terciaryDark dark:bg-terciaryDark' : 'w-0 bg-dark dark:bg-light h-[3px]'}`}
            >
                &nbsp;
            </span>
        </ScrollLink>
    )
}

export default NavigationLink