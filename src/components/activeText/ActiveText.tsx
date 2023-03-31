import React, { useEffect, useState } from 'react';

import s from './ActiveText.module.css'

type ActiveTextPropsType = {
    texts: string[]
    speed: number
}

const ActiveText: React.FC<ActiveTextPropsType> = ({
    texts, 
    speed, 
}) => { 
    
    const [activeId, setActiveId] = useState(0)
    const [text, setText] = useState(texts[0])
    const [value, setValue] = useState('')
    const [step, setStep] = useState(0)

    const getNewValue = (text: string, step: number) => {
        return text.split('').reduce((acc: string, el: string, i) => {
            if (i <= step) {
                return `${acc}${el}`
            }
            return acc
        }, '')
    }

    const oneStep = () => {
        const newValue = getNewValue(text, step)
        setValue(newValue)
        if (step === text.length - 1) {
            setStep(0)
            if (activeId === texts.length-1) {
                setActiveId(0)
                setText(texts[0])
            } else {
                setActiveId(activeId + 1)
                setText(texts[activeId + 1])
            }
        } else {
            setStep(step + 1)
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            oneStep()
        }, speed)
        return () => clearInterval(timerId)
    })

    return (
        <span>{value}</span>
    );
};

export default ActiveText;