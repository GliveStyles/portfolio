import React from 'react';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import TopContent from './Components/TopConted/TopContent';
import './App.css';
import SkilContainer from './Components/SkilContainer/SkilContainer';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import Project from './Components/Project/Project';
function App() {
  return (
    <div>
      <Header/>
      <TopContent/>
      <TopContainer/>
      <SkilContainer/>
      <ProjectContainer/>
      <Project/>
    </div>
  );
}

export default App;
