import React from 'react';
import { ProjectCard } from './projectCard/ProjectCard';
import s from './ProjectsBlock.module.css'

export const ProjectsBlock = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.projects}>
                <h2 >Projects</h2>
            </div>
            <div className={s.projectsBlockContainer}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
};