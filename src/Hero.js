import React, { useEffect, useRef } from 'react';
import './App.scss';
import './reset.css';

import art from './images/art.jpg';
import logo from './images/Logo.svg';
import arrow from './images/Arrow.svg';

import gsap from 'gsap';

function Hero() {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [line1, line2, line3],
      { y: 80 },
      {
        duration: 1,
        y: 0,
        // opacity: 1,
        stagger: 0.1,
        ease: 'power3.ease',
        delay: 1,
      }
    );
    gsap.fromTo(
      '.image',
      { y: 1000, scale: 1.2 },
      {
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',

        delay: 1,
      }
    );
  }, []);

  return (
    <>
      <div className='container'>
        <div className='nav'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>Features</a>
              </li>
              <li>
                <a href='#'>About us</a>
              </li>
            </ul>
          </div>
          <div className='explore'>
            <h1>Explore</h1>
          </div>
        </div>
        <section className='hero'>
          <div className='hero-text'>
            <div className='hero-text-header'>
              <h1>
                <div className='header-text-line'>
                  <div
                    ref={(el) => (line1 = el)}
                    className='header-text-line-inner'
                  >
                    The soul is
                  </div>
                </div>
                <div className='header-text-line'>
                  <div
                    ref={(el) => (line2 = el)}
                    className='header-text-line-inner'
                  >
                    healed by the
                  </div>
                </div>
                <div className='header-text-line'>
                  <div
                    ref={(el) => (line3 = el)}
                    className='header-text-line-inner'
                  >
                    beauty of Art
                  </div>
                </div>
              </h1>
            </div>
            <div className='explore-text'>
              <h1>Explore</h1>
              <div className='arrow-svg'>
                <img src={arrow} alt='' />
              </div>
            </div>
          </div>
          <div className='image'>
            <img src={art} alt='' />
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
