'use client'
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { scroller } from 'react-scroll';

import Hero from '../components/home/Hero';
import Footer from '../components/home/Footer';
import Section1 from '../components/home/Section1';
import Parallex from '../components/home/Parallex';
import Subscription from '../components/home/subscription';
import Author from '../components/home/Author';
import Animated from '../components/home/Animated';

export default function Home() {
      const searchParams = useSearchParams();
      const scrollTo = searchParams.get('scrollTo');

      useEffect(() => {
            if (scrollTo) {
                  scroller.scrollTo(scrollTo, {
                        duration: 500,
                        smooth: true,
                  });
            }
      }, [scrollTo]);

      return (
            <>
                  <div id="hero">
                        <Hero />
                  </div>
                  <div id="section1">
                        <Section1 />
                  </div>
                  <div id="parallex">
                        <Parallex />
                  </div>
                  <div id="subscription">
                        <Subscription />
                  </div>
                  <div id="author">
                        <Author />
                  </div>
                  <div id="animated">
                        <Animated />
                  </div>
                  <Footer />
            </>
      );
}
