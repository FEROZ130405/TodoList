import React, { useState, useCallback } from 'react';
import ButtonComponent from './ButtonComponent';

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ButtonComponent onClick={increment} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

export default CounterComponent;
