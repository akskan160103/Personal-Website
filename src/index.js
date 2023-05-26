import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Imports styles defined in .css file
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*
The <body> HTML element is contained in the index.html file, which is automatically managed by react (Hence not visible in directory)

This is what is typically contained in that file:

<body>
    <div id="root"></div>
</body>

Anything which is displayed in the webpage is part of the <body> element

Chain of commad: index.html -> index.js -> <App>

*/



