import React from 'react'
import './App.css'

const TAGS = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Vite', 'SVG', 'mongoDB', 'SQL', 'VBA', 'UI/UX', 'animation', 'webdev'];
const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#fde5b2', '#f5d0fe', '#fed7aa', '#fee2e2'];
const FONTFAMILY = ['cursive','fantasy','emoji','fansong','math','monospace','sans-serif']

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const Listed = ({text, fontcolor, font}) => (
  <li className='tag'>
    <span className='wrap' style={{'color':fontcolor,'fontFamily': font}}>{text}</span>
  </li>
);

const App = () => {
  return (
    <>
    <div id='cursor'></div>
    <ul className='tags-cloud'>
      {TAGS.map((tag,i) => (
        <Listed text={tag} fontcolor={COLORS[random(0,6)]} font={FONTFAMILY[random(0,6)]} key={tag}/>
      ))}
    </ul>
    <div id='hide' className='button'>
      <div id='header'><h1>Imagine your services in this list.</h1></div>
      <h2>Click Me. Then move your mouse.</h2>
      </div>
    </>
  )
};

export default App;

