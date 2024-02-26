import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';

import Home from './pages/Home/Home.js';
import Contact from './pages/Contacts/Contact.js';
import Characters from './pages/Characters/Characters.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/characters'element={<Characters/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router> 
    
  </React.StrictMode>
);