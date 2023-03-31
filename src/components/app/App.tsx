import React from 'react';
import { Contacts } from '../contacts/Contacts';

import {Header} from '../header/Header';
import {MainBlock} from '../mainBlock/MainBlock';
import { ProjectsBlock } from '../projectsBlock/ProjectsBlock';
import {SkillsBlock} from '../skillsBlock/SkillsBlock';

import './App.css';

export function App() {
  return (
    <div className="App">
      <Header/>
      <MainBlock/>
      <ProjectsBlock/>
      <SkillsBlock/>
      <Contacts/>
    </div>
  );
}
