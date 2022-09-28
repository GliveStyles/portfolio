import React from 'react';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import TopContent from './Components/TopConted/TopContent';
import SkilContainer from './Components/SkilContainer/SkilContainer';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './Components/ExperirenceContainer/ExpereniceContainer';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div>
      <Header/>
      <TopContent/>
      <TopContainer/>
      <SkilContainer/>
     <ProjectContainer/>
     <ExperienceContainer/>
     <Contact/>
    </div>
  );
}

export default App;
