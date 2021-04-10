import React from 'react'
import { useState } from 'react'
import './input.css'


export default function Input(prop){


    const [value , setValue] = useState('')
    const [styleLabel , setStyleLabel] = useState({})
    const [styleDiv , setStyleDiv] = useState({})

    const focus = (el) => {
        setStyleLabel({ 
            marginTop: '0px',
            fontSize: '15px',
            color: '#2196F3'
        })
        setStyleDiv({
            border: '1.9px solid #2196F3',
            background: '#e8f0fe',
            boxShadow: '0px 15px 20px -20px rgba(30,30,60,0.25)'
        })
    }
    const blur = (el) => {
        if(value === ''){
            setStyleLabel({ marginTop: '18px'})
            setStyleDiv({
                border: '1px solid #707070'
            })
        }
    }

    const change = (el) => {
        setValue(el.target.value)
        //console.log(value);
    }

    return(
        <div className="input" onFocus={focus} onBlur={blur} style={styleDiv}>
            <label style={styleLabel} htmlFor="">{prop.label}</label>
            <input type={prop.type} name={prop.name} onChange={change} onBlur={prop.onBlur} />
        </div>
    )
}