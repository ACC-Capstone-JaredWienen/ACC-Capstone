import React from 'react';
import { createRoot } from 'react-dom/client';  // Change here
import App from './components/App.js';
import './style/index.css';

const root = document.getElementById('root');
const app = createRoot(root);
app.render(<App />);
