'use client';
import { useState } from 'react';

export default function Counter({ increment, color }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    const next = count + increment;
    setCount(next > 10 ? 0 : next); // reset to 0 once it exceeds 10
  }

  return (
    <div style={{ margin: '1rem 0' }}>
      <p>Count: {count}</p>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        +{increment}
      </button>
    </div>
  );
}