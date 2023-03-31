import React from 'react';
import ActiveText from '../activeText/ActiveText';

import s from './MainBlock.module.css'

export const MainBlock = () => {

    const texts: string[] = ['Hello, my name is *******', 'I\'m can do this', 'Or', 'I\'m cant do this']

    return (
        <div className={s.mainBlock}>
            <div className={s.mainContentWrapp}>
                <div className={s.mainTextBlock}>
                    <div className={s.mainTextWrapp}>
                        <ActiveText texts={texts} speed={170}/>
                    </div>
                </div>
                <div className={s.mainPhotoWrapp}>
                    <div className={s.photo}>
                        photo
                    </div>
                </div>
            </div>
        </div>
    );
};