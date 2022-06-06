import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Loader from './Loader';
import gsap from 'gsap';
// import art from './images/art.jpg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.to('.background', {
      display: 'block',
      duration: 0,
    });
    gsap.fromTo(
      '.background',
      { backgroundColor: '#ffffff' },
      {
        backgroundColor: '#d8d7d7',
        duration: 1.5,
        ease: 'power3.in',
        delay: 4,
      }
    );
  }, []);

  return (
    <div className='background'>
      {loading ? (
        <div>
          <Loader setLoading={setLoading} />
        </div>
      ) : (
        <>
          <Hero />
        </>
      )}
    </div>
  );
}

export default App;
