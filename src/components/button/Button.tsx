import React from 'react';

import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    size?: 'small' | 'medium' | 'big'
    color?: 'green' | 'blue' | 'red' | 'yellow'
    callBack: () => void
}

const Button:React.FC<ButtonPropsType> = ({
    name,
    size = 'medium',
    color = 'green',
    callBack
}) => {

    const sizee = size === 'small' ? s.small : size === 'big' ? s.big : s.medium
    const colorr = color === 'blue' ? s.blue : color === 'red' ? s.red : color === 'yellow' ? s.yellow : s.green

    return (
        <div className={s.buttonWrapp}>
            <button className={s.button + ' ' + sizee + ' ' + colorr} onClick={() => callBack()}><span>{name}</span><i></i></button>
        </div>
        
    );
};

export default Button;