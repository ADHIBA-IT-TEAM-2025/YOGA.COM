import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import YogahomeLanding from './COMPONENT-YOGA/B-LAYOUT-HOME/home';
import LoadingScreen from './LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // match LoadingScreen
    return () => clearTimeout(timer);
  }, []);
  return <>{loading ? <LoadingScreen /> : <YogahomeLanding />}</>;
}

export default App;
