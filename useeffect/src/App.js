import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
