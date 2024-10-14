import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Layout from './COMPONENT-YOGA/A-LAYOUT-NAV/nav';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;


