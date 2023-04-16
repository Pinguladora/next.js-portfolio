import React from 'react';
import NavBar from './NavBar';
import SectionScroller from '../hooks/SectionScroller';
import Footer from './Footer';


const PageWrapper = ({ Component, pageProps }) => {

    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <SectionScroller />
            <Footer />
        </>
    );
};

export default PageWrapper;