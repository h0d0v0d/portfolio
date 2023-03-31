import React from 'react';
import s from './ProjectCard.module.css'

export const ProjectCard = () => {
    return (
        <div className={s.projectCard}>
            <div className={s.projectCardFace}>
                <h2 className={s.projectName}>Project name</h2>
            </div>
            <div className={s.projectCardInfoWrapp}>
                <h2 className={s.projectName}>Project description</h2>
            </div>
            
        </div>
    );
};
