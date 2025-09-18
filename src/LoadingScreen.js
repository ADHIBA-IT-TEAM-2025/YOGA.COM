// LoadingScreen.js
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <img
        src={'/IMAGE/OMSAKTHI-2.webp'}
        alt="Loading..."
        style={{ width: '200px', height: '200px', objectFit: 'contain' }}
      />
    </div>
  );
};

export default LoadingScreen;
