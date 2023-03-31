import React from 'react';
import Button from '../../button/Button';
import s from './Navbar.module.css'

export const Navbar = () => {

    const log = () => {
        console.log('Click')
    }

    return (
        <div className={s.navbar}>
            <button className={s.navvbutton}>Home</button>
            <button className={s.navvbutton}>Projects</button>
            <button className={s.navvbutton}>Scills</button>
            <button className={s.navvbutton}>Contacts</button>
            {/* <Button name={'Home'} callBack={log}/>
            <Button name={'Projects'} callBack={log}/>
            <Button name={'Scills'} callBack={log}/>
            <Button name={'Contacts'} callBack={log}/> */}
        </div>
    );
};

