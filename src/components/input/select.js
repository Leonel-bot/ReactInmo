import React, { useState } from 'react'
import './input.css'

export default function Select(props){


    const [styleDiv , setStyleDiv] = useState({})
    const [styleLabel , setStyleLabel] = useState({})
    const [value , setValue] = useState('')
    

    const focus = () => {
        setStyleDiv({
            border: '1px solid #2196F3',
            boxShadow: '0px 15px 20px -20px rgba(30,30,60,0.25)',
            background: '#e8f0fe',
        })
        setStyleLabel({
            color : "#2196F3",
            fontSize: '17px'
        })
    }
    const blur = () => {
        if(value === ''){
            setStyleDiv({
                border: '1px solid #777777',
            })
            setStyleLabel({
                color : "#1e1e3c"
            })
        }
    }
    const change = (el) => {
        setValue(el.target.value)
    }

    

    return(
        <div className="select" onFocus={focus} onBlur={blur}>
            <div className="divLabel">
                <label htmlFor="" style={styleLabel}>{props.label}</label>
            </div>
            <select name={props.name} id="" style={styleDiv} onChange={change} onBlur={props.onBlur}>
                {props.opcion1}
                {props.opcion2}
                {props.opcion3}
                {props.opcion4}
                {props.opcion5}
                {props.opcion6}
                {props.opcion7}
                {props.opcion8}
                {props.opcion9}
                {props.opcion10}
            </select>
        </div>
    )
}