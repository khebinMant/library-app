import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import "primereact/resources/themes/vela-blue/theme.css";          
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                
import 'animate.css';

import { LibraryRoutes } from './router/LibraryRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LibraryRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);
