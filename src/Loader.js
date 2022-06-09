import React, { useEffect, useRef } from 'react';
import art from './images/art.jpg';
import logo from './images/Logo.svg';
import gsap from 'gsap';

export default function Loader({ setLoading }) {
  let logos = useRef(null);

  useEffect(() => {
    gsap.to(logos, {
      opacity: 1,
      duration: 4,
      ease: 'power3.in',
      onComplete: () => setLoading(false),
    });
  }, [setLoading]);

  return (
    <div className='loader'>
      <div className='loader-log'>
        <img ref={(el) => (logos = el)} src={logo} alt='' />
      </div>
      {/* <img src={art} alt='' /> */}
    </div>
  );
}
