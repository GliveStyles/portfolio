import React from 'react';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import TopContent from './Components/TopConted/TopContent';
import './App.css';
import SkilContainer from './Components/SkilContainer/SkilContainer';
function App() {
  return (
    <div>
      <Header/>
      <TopContent/>
      <TopContainer/>
      <SkilContainer/>
    </div>
  );
}

export default App;
