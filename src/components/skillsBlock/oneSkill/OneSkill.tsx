import { Slider } from '@mui/material';
import React from 'react';
import s from './OneSkill.module.css'

export const OneSkill = () => {
    return (
        <div className={s.skillContainer}>
            <div className={s.center}>
                <h2 className={s.skillName}>Skill Name</h2>
                <Slider value={45}
                getAriaValueText={() => '45'}
                        sx={{
                            width: '40%',
                            color: '#4bffa5',
                        }}/>
            </div>
        </div>
    );
};