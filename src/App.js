import './App.css';
import React from 'react';
import TagButton from './components/TagButton';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="Title">
        <Header/>
      </header>
      <div className='Button'>
      <TagButton/>
      </div> 
    </div>
  );
}

export default App;
