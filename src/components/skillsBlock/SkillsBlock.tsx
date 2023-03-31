import React from 'react';
import { OneSkill } from './oneSkill/OneSkill';

import s from './SkillsBlock.module.css'

export const SkillsBlock = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsBlockContainer}>
                <OneSkill/>
                <OneSkill/>
                <OneSkill/>
                <OneSkill/>
            </div>
        </div>
    );
}; 