import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './COMPONENT-YOGA/A-LAYOUT-NAV/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './COMPONENT-YOGA/A-LAYOUT-NAV/digitalcard';
import YogahomeLanding from './COMPONENT-YOGA/B-LAYOUT-HOME/home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<YogahomeLanding />} />
          </Route>
          <Route path="GET-IN-TOUCH" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
