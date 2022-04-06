import React from 'react';
import logo from './logo192.png';
import './App.css';

const App = () => {
  return (
    <div>
        <nav className='nav'>
            <div className='top-right-header'>
              <img src={logo} width="40px" />
              <h1>ReactFacts</h1>
            </div>
            <p className='top-left-header'>React Course-project 1</p>
        </nav>
        <div className='body-part'>
            <h1>Fun facts about React</h1>
            <ul className='lists'>
                <li>Was first released in 2003</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>
  )
}

export default App