import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import wordcloud from './tagCloud.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('click', () => {
  wordcloud();
});