import './App.css';
import React from 'react';
import TagButton from './components/TagButton';
import { useState } from 'react';
import RecruitmentCalculator from './components/RecruitmentCalculator'

function App() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  // Declare function named convertStringTagToButton 
  // function convertStringTagToButton(tag) {
    // 3 times
    // Guard -> <TagButton key="Guard">Guard</TagButton>
    // DPS -> <TagButton key="DPS">DPS</TagButton>
    // Support -> <TagButton key="Support">Support</TagButton>
    // return (<TagButton key={tag}>{tag}</TagButton>);

  // Declare variable named renderTagButtons that contains anonymous function
  // https://dev.to/chris_bertrand/coding-concepts---anonymous-methods-a9o
  

  return (
    <div className="App">
      <div className="RecruitmentTagButtons">
        <TagButton onTagClick={handleClick}>Hello</TagButton>      
      </div>
      <RecruitmentCalculator/>
      {clicked && <div>Clicked!</div>}
    </div>
  );
}

export default App;