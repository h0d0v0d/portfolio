import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsWrapper}>
                <Contact name={'Email'} info={'jhdfvjdfnv@gmail.com'}/>
                <Contact name={'Phone'} info={'+48987549584545'}/>
                <Contact name={'Adress'} info={'Tatarstan'}/>
            </div>
        </div>
    );
};

const Contact: React.FC<{name: string, info: string}> = ({
    name,
    info
}) => {
    return (
        <h2 className={s.text}>{`${name}: ${info}`}</h2>
    )
}