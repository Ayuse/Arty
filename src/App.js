import React, { useState } from 'react';
import Hero from './Hero';
import CustomCursor from './CustomCursor';

import Loader from './Loader';
// import art from './images/art.jpg';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className='background'>
      <CustomCursor />

      {loading ? (
        <>
          <Loader setLoading={setLoading} />
        </>
      ) : (
        <>
          <Hero />
        </>
      )}
    </div>
  );
}

export default App;
