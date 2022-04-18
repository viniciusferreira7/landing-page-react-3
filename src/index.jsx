import React from 'react';

import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/styles';

import Home from './templetes/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
);
