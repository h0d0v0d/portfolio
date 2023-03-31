import React from 'react';
import s from './Header.module.css'
import {Navbar} from './navbar/Navbar';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.contentHeaderWrapp}>
                <h4 className={s.name}>Yahor <span style={{color: 'white'}}>Serafontau</span></h4>
                <Navbar/>
            </div>
        </div>
    );
};