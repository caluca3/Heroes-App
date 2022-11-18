import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import InfoModal from './InfoModal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <InfoModal />
    </BrowserRouter>
  </React.StrictMode>
)
